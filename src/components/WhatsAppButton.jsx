import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { whatsappLink } from '../data/content'
import { WhatsAppIcon } from './Icons'

export default function WhatsAppButton() {
  const { pathname } = useLocation()
  const [hide, setHide] = useState(false)

  // On phones, step aside while the contact section (form and its own WhatsApp buttons) is on screen
  useEffect(() => {
    const section = document.getElementById('contact')
    if (!section || !('IntersectionObserver' in window)) { setHide(false); return }
    const phone = window.matchMedia('(max-width: 639px)')
    let inView = false
    const update = () => setHide(inView && phone.matches)
    const io = new IntersectionObserver(([en]) => { inView = en.isIntersecting; update() })
    io.observe(section)
    phone.addEventListener('change', update)
    return () => { io.disconnect(); phone.removeEventListener('change', update); setHide(false) }
  }, [pathname])

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      aria-hidden={hide || undefined}
      tabIndex={hide ? -1 : undefined}
      className={`fixed bottom-4 right-4 z-50 flex h-12 w-12 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#15803D] text-white shadow-lg transition hover:scale-105 hover:bg-[#166534] ${hide ? 'pointer-events-none opacity-0' : ''}`}
    >
      <WhatsAppIcon width={30} height={30} />
    </a>
  )
}
