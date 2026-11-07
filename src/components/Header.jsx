import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { nav } from '../data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur transition-all ${scrolled ? 'shadow-card' : ''}`}>
      <div className={`container-x flex items-center justify-between transition-all ${scrolled ? 'h-14' : 'h-20'}`}>
        <Logo small={scrolled} />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink hover:text-accent-600">{l.label}</a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-2 text-sm">Get a Free Quote</a>
        </nav>
        <button
          className="rounded-lg p-2 text-brand-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-brand-100 bg-white px-5 pb-5 pt-2 md:hidden" aria-label="Mobile">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-brand-50 py-3 text-base font-medium">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">Get a Free Quote</a>
        </nav>
      )}
    </header>
  )
}
