import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'
import { nav } from '../data/content'
import { pages } from '../data/pages'
import { pathFor } from '../data/seo'
import { useAnchor } from '../hooks'

const servicePages = pages.filter((p) => !['pricing', 'portfolio', 'contact'].includes(p.slug))

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const a = useAnchor()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 bg-surface/95 backdrop-blur transition-all ${scrolled ? 'shadow-card' : ''}`}>
      <div className={`container-x flex items-center justify-between transition-all ${scrolled ? 'h-14' : 'h-20'}`}>
        <Logo small={scrolled} />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((l) => l.menu ? (
            <div key={l.href} className="group relative">
              <a href={a(l.href)} className="text-sm font-medium text-ink hover:text-accent-600" aria-haspopup="true">{l.label}</a>
              <ul className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-line bg-surface p-2 shadow-card">
                  {servicePages.map((p) => (
                    <li key={p.slug}><Link to={pathFor(p.slug)} className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-tint hover:text-accent-600">{p.nav}</Link></li>
                  ))}
                </div>
              </ul>
            </div>
          ) : (
            <a key={l.href} href={a(l.href)} className="text-sm font-medium text-ink hover:text-accent-600">{l.label}</a>
          ))}
          <ThemeToggle />
          <a href={a('#contact')} className="btn-primary !px-5 !py-2 text-sm">Get a Free Quote</a>
        </nav>
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
        <button
          className="rounded-lg p-2 text-head "
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-surface px-5 pb-5 pt-2 md:hidden" aria-label="Mobile">
          {nav.map((l) => l.menu ? (
            <div key={l.href} className="border-b border-line py-3">
              <p className="text-base font-medium">{l.label}</p>
              <ul className="mt-2 space-y-1 pl-4">
                {servicePages.map((p) => (
                  <li key={p.slug}><Link to={pathFor(p.slug)} onClick={() => setOpen(false)} className="block py-1.5 text-base text-muted">{p.nav}</Link></li>
                ))}
              </ul>
            </div>
          ) : (
            <a key={l.href} href={a(l.href)} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-base font-medium">{l.label}</a>
          ))}
          <a href={a('#contact')} onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">Get a Free Quote</a>
        </nav>
      )}
    </header>
  )
}
