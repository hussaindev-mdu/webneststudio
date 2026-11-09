import { useCallback, useEffect, useRef, useState } from 'react'

// 3D laptop (public/models/webnest-laptop.glb), loaded lazily with three.js.
// Click (or tap) the laptop to close/open the lid. A button does the same on phones.
// The 3D mouse cursor (MouseCursor3D) is told when the pointer is over the laptop.
// The static SVG shows first and stays if WebGL is unavailable.
export default function Hero3D() {
  const mount = useRef(null)
  const toggleRef = useRef(() => {})
  const closedRef = useRef(false)
  const [ready, setReady] = useState(false)
  const [closed, setClosed] = useState(false)

  const toggle = useCallback(() => setClosed((c) => !c), [])
  toggleRef.current = toggle

  // keep the animation target in sync with React state
  useEffect(() => { closedRef.current = closed }, [closed])

  useEffect(() => {
    let disposed = false
    let cleanup = () => {}
    let cleanupExtra = () => {}

    ;(async () => {
      try {
        const THREE = await import('three')
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
        const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js')
        const el = mount.current
        if (disposed || !el) return

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const coarse = window.matchMedia('(pointer: coarse)').matches
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, coarse ? 1.5 : 2))
        renderer.outputColorSpace = THREE.SRGBColorSpace
        renderer.toneMapping = THREE.NeutralToneMapping

        const scene = new THREE.Scene()
        const pmrem = new THREE.PMREMGenerator(renderer)
        scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
        const sun = new THREE.DirectionalLight(0xffffff, 2)
        sun.position.set(3, 4, 5)
        scene.add(sun)

        const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)

        const gltf = await new GLTFLoader().loadAsync('/models/webnest-laptop.glb')
        if (disposed) return
        const model = gltf.scene
        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        model.position.sub(box.getCenter(new THREE.Vector3()))
        const group = new THREE.Group()
        group.add(model)
        scene.add(group)

        // laptop lid: open pose comes from the model, closed = hinge rotated a further 106° about X
        const lid = model.getObjectByName('LP_lid_pivot')
        const openQ = lid ? lid.quaternion.clone() : null
        const closedQ = lid
          ? openQ.clone().multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), THREE.MathUtils.degToRad(106)))
          : null
        let amount = closedRef.current ? 1 : 0 // 0 = open, 1 = closed
        const applyLid = () => { if (lid) lid.quaternion.slerpQuaternions(openQ, closedQ, amount) }
        applyLid()

        // soft contact shadow under the devices
        const c = document.createElement('canvas')
        c.width = c.height = 128
        const g = c.getContext('2d')
        const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64)
        grad.addColorStop(0, 'rgba(10,39,66,0.35)')
        grad.addColorStop(1, 'rgba(10,39,66,0)')
        g.fillStyle = grad
        g.fillRect(0, 0, 128, 128)
        const shadow = new THREE.Mesh(
          new THREE.PlaneGeometry(size.x * 1.25, size.z * 3),
          new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false })
        )
        shadow.rotation.x = -Math.PI / 2
        shadow.position.y = -size.y / 2 - 0.02
        group.add(shadow)

        // fit the whole scene in view; smaller on phones
        const fit = () => {
          const w = el.clientWidth, h = el.clientHeight
          renderer.setSize(w, h, false)
          camera.aspect = w / h
          const t = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)
          const phone = w < 640
          const scale = phone ? 1.3 : 1 // larger distance = smaller model
          const d = (Math.max((size.x * 0.62) / (t * camera.aspect), (size.y * 0.7) / t) + size.z / 2) * scale
          camera.position.set(0, d * 0.16, d)
          camera.lookAt(0, -size.y * 0.04, 0)
          camera.updateProjectionMatrix()
        }
        el.appendChild(renderer.domElement)
        const canvas = renderer.domElement
        canvas.style.cssText = 'width:100%;height:100%;display:block;touch-action:pan-y'
        fit()
        const ro = new ResizeObserver(fit)
        ro.observe(el)

        // pointer: tilt toward the mouse, hover cursor, click to toggle
        const raycaster = new THREE.Raycaster()
        const ndc = new THREE.Vector2()
        const hitLaptop = (e) => {
          const r = canvas.getBoundingClientRect()
          ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
          raycaster.setFromCamera(ndc, camera)
          return raycaster.intersectObject(model, true).length > 0
        }
        let mx = 0, my = 0
        const onMove = (e) => {
          const r = el.getBoundingClientRect()
          mx = ((e.clientX - r.left) / r.width - 0.5) * 2
          my = ((e.clientY - r.top) / r.height - 0.5) * 2
        }
        let overLaptop = false
        const setOver = (v) => {
          if (v === overLaptop) return
          overLaptop = v
          canvas.style.cursor = v ? 'pointer' : 'default'
          window.dispatchEvent(new CustomEvent('cursor3d:hover', { detail: v }))
        }
        const onCanvasMove = (e) => { if (e.pointerType === 'mouse') setOver(hitLaptop(e)) }
        const onLeave = () => setOver(false)
        const onClick = (e) => { if (hitLaptop(e)) toggleRef.current() }
        window.addEventListener('pointermove', onMove, { passive: true })
        canvas.addEventListener('pointermove', onCanvasMove)
        canvas.addEventListener('pointerleave', onLeave)
        canvas.addEventListener('click', onClick)

        let visible = true
        const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting })
        io.observe(el)

        const baseY = model.position.y
        const clock = new THREE.Clock()
        let raf = 0
        const render = () => {
          const t = clock.getElapsedTime()
          const target = closedRef.current ? 1 : 0
          amount = reduceMotion ? target : amount + (target - amount) * 0.12
          if (Math.abs(target - amount) < 0.001) amount = target
          applyLid()
          if (!reduceMotion) {
            group.rotation.y += (Math.sin(t * 0.6) * 0.3 + mx * 0.35 - group.rotation.y) * 0.06
            group.rotation.x += (my * 0.3 - group.rotation.x) * 0.06
            model.position.y = baseY + Math.sin(t * 1.2) * 0.06
          }
          renderer.render(scene, camera)
        }
        const loop = () => {
          raf = requestAnimationFrame(loop)
          if (visible) render()
        }
        render()
        setReady(true)
        if (reduceMotion) {
          // no continuous animation: just redraw when the lid state changes
          const redraw = () => render()
          el.addEventListener('lid-change', redraw)
          cleanupExtra = () => el.removeEventListener('lid-change', redraw)
        } else loop()

        cleanup = () => {
          cancelAnimationFrame(raf)
          cleanupExtra()
          ro.disconnect(); io.disconnect()
          window.removeEventListener('pointermove', onMove)
          canvas.removeEventListener('pointermove', onCanvasMove)
          canvas.removeEventListener('pointerleave', onLeave)
          canvas.removeEventListener('click', onClick)
          pmrem.dispose()
          renderer.dispose()
          canvas.remove()
        }
        if (disposed) cleanup()
      } catch {
        /* WebGL or loading failed: keep the static image */
      }
    })()

    return () => { disposed = true; cleanup() }
  }, [])

  // reduced-motion users get no render loop, so nudge a redraw when the lid state changes
  useEffect(() => {
    mount.current?.dispatchEvent(new Event('lid-change'))
  }, [closed])

  return (
    <div className="mx-auto w-full max-w-sm sm:max-w-xl">
      <div className="relative aspect-[16/11] w-full sm:aspect-[4/3]">
        {!ready && (
          <img
            src="/images/hero-devices.svg"
            alt="Website displayed on a laptop and a phone"
            width="640" height="480"
            className="absolute inset-0 m-auto w-full"
            fetchPriority="high"
          />
        )}
        <div ref={mount} data-cursor3d className="absolute inset-0" role="img" aria-label="3D laptop showing our website demo" />
        {ready && (
          <button
            type="button"
            onClick={toggle}
            aria-pressed={closed}
            className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-brand-900 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-brand-700 md:sr-only md:focus:not-sr-only md:focus:px-4 md:focus:py-2"
          >
            {closed ? 'Open laptop' : 'Close laptop'}
          </button>
        )}
      </div>
      {ready && <p className="mt-2 hidden text-center text-xs text-muted md:block">Click the laptop to {closed ? 'open' : 'close'} it</p>}
    </div>
  )
}
