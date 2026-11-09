import { useEffect } from 'react'

// A small 3D computer mouse (public/models/webnest-mouse.glb) that replaces the pointer
// over the 3D laptop in the hero only (the element marked data-cursor3d). It presses down
// when you click, grows while over the laptop, and is skipped on touch screens.
const ZONE = '[data-cursor3d]'
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary'
const SIZE = 90 // canvas size in CSS px (small cursor)

export default function MouseCursor3D() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let disposed = false
    let cleanup = () => {}

    ;(async () => {
      try {
        const THREE = await import('three')
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
        const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js')
        const gltf = await new GLTFLoader().loadAsync('/models/webnest-mouse.glb')
        if (disposed) return

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setSize(SIZE, SIZE)
        renderer.outputColorSpace = THREE.SRGBColorSpace
        renderer.toneMapping = THREE.NeutralToneMapping
        const canvas = renderer.domElement
        canvas.setAttribute('aria-hidden', 'true')
        canvas.style.cssText = `position:fixed;left:0;top:0;width:${SIZE}px;height:${SIZE}px;pointer-events:none;z-index:9999;display:none;will-change:transform`
        document.body.appendChild(canvas)

        const scene = new THREE.Scene()
        const pmrem = new THREE.PMREMGenerator(renderer)
        scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
        const sun = new THREE.DirectionalLight(0xffffff, 2)
        sun.position.set(2, 4, 4)
        scene.add(sun)
        const ext = 1.9
        const camera = new THREE.OrthographicCamera(-ext, ext, ext, -ext, 0.1, 50)
        camera.position.set(0, 0, 10)

        // mouse lies flat (top = +Y, front = -Z): tilt it toward the camera, then roll it so it points up-left
        const model = gltf.scene
        const box = new THREE.Box3().setFromObject(model)
        model.position.sub(box.getCenter(new THREE.Vector3()))
        const tilt = new THREE.Group()
        tilt.rotation.x = 1.1
        tilt.add(model)
        const roll = new THREE.Group()
        roll.rotation.z = 0.5
        roll.add(tilt)
        const wrap = new THREE.Group()
        wrap.add(roll)
        scene.add(wrap)

        const btnL = model.getObjectByName('MS_btnL')
        const btnR = model.getObjectByName('MS_btnR')
        const wheel = model.getObjectByName('MS_wheel')
        const btnRest = [btnL, btnR].map((b) => b && b.position.clone())

        let x = -200, y = -200, active = false, hover = false, laptopHover = false, press = 0, pressing = false
        let scrollSpin = 0
        const inZone = (el) => !!el && !!el.closest && !!el.closest(ZONE)
        const update = (el) => {
          const on = inZone(el)
          if (on !== active) {
            active = on
            canvas.style.display = on ? 'block' : 'none'
            if (on) loop()
          }
          hover = !!(el && el.closest && el.closest(INTERACTIVE))
        }
        const onMove = (e) => {
          if (e.pointerType && e.pointerType !== 'mouse') return
          x = e.clientX; y = e.clientY
          canvas.style.transform = `translate(${x - SIZE / 2}px, ${y - SIZE / 2}px)`
          update(e.target)
        }
        const onDown = (e) => { if (e.button === 0 && active) pressing = true }
        const onUp = () => { pressing = false }
        const onScroll = () => update(document.elementFromPoint(x, y))
        const onWheel = (e) => { scrollSpin += e.deltaY * 0.01 }
        const onLeaveDoc = () => { active = false; canvas.style.display = 'none' }
        const onLaptop = (e) => { laptopHover = !!e.detail }
        window.addEventListener('pointermove', onMove, { passive: true })
        window.addEventListener('pointerdown', onDown, { passive: true })
        window.addEventListener('pointerup', onUp, { passive: true })
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('wheel', onWheel, { passive: true })
        window.addEventListener('cursor3d:hover', onLaptop)
        document.documentElement.addEventListener('pointerleave', onLeaveDoc)

        const clock = new THREE.Clock()
        let raf = 0
        const loop = () => {
          cancelAnimationFrame(raf)
          const tick = () => {
            if (!active || disposed) return
            raf = requestAnimationFrame(tick)
            const t = clock.getElapsedTime()
            press += ((pressing ? 1 : 0) - press) * 0.35
            const target = (hover || laptopHover ? 1.2 : 1) * (1 - press * 0.12)
            wrap.scale.setScalar(wrap.scale.x + (target - wrap.scale.x) * 0.25)
            wrap.rotation.set(Math.sin(t * 2) * 0.03, 0, Math.cos(t * 1.7) * 0.03)
            // left button dips when pressed
            if (btnL && btnR) {
              ;[btnL, btnR].forEach((b, i) => {
                b.position.copy(btnRest[i])
                if (i === 0) b.position.y -= press * 0.07
              })
            }
            if (wheel) { wheel.rotation.x += scrollSpin * 0.2; scrollSpin *= 0.85 }
            renderer.render(scene, camera)
          }
          tick()
        }

        document.documentElement.classList.add('has-3d-cursor')
        cleanup = () => {
          cancelAnimationFrame(raf)
          document.documentElement.classList.remove('has-3d-cursor')
          window.removeEventListener('pointermove', onMove)
          window.removeEventListener('pointerdown', onDown)
          window.removeEventListener('pointerup', onUp)
          window.removeEventListener('scroll', onScroll)
          window.removeEventListener('wheel', onWheel)
          window.removeEventListener('cursor3d:hover', onLaptop)
          document.documentElement.removeEventListener('pointerleave', onLeaveDoc)
          pmrem.dispose()
          renderer.dispose()
          canvas.remove()
        }
        if (disposed) cleanup()
      } catch {
        /* WebGL or the model failed: keep the normal cursor */
      }
    })()

    return () => { disposed = true; cleanup() }
  }, [])

  return null
}
