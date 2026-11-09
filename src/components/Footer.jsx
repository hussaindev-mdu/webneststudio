import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useAnchor } from '../hooks'
import { pages } from '../data/pages'
import { pathFor } from '../data/seo'
import { brand, footer } from '../data/content'
import { InstagramIcon, FacebookIcon } from './Icons'

export default function Footer() {
  const a = useAnchor()
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="container-x border-t border-white/10 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <Logo light />
            <p className="mt-2 text-sm">{brand.tagline}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footer.links.map((l) => <a key={l.href} href={a(l.href)} className="hover:text-white">{l.label}</a>)}
          </nav>
          <div className="flex gap-3">
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"><InstagramIcon /></a>
            <a href={brand.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"><FacebookIcon /></a>
          </div>
        </div>
        <nav aria-label="Services" className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm font-semibold text-white">Our services</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {pages.map((p) => <li key={p.slug}><Link to={pathFor(p.slug)} className="hover:text-white">{p.nav}</Link></li>)}
          </ul>
        </nav>
        <p className="mt-8 text-sm">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
