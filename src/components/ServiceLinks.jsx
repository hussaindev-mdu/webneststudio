import { Link } from 'react-router-dom'
import { pages } from '../data/pages'
import { pathFor } from '../data/seo'
import Reveal from './Reveal'

const featured = ['website-development', 'business-website-design', 'restaurant-website-design', 'clinic-website-design', 'real-estate-website-design']

export default function ServiceLinks() {
  const items = featured.map((s) => pages.find((p) => p.slug === s))
  return (
    <section id="services" className="section bg-surface">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title">Websites for your kind of business</h2>
          <p className="section-sub">Every business is different. See how we design for yours.</p>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <li key={p.slug}>
              <Link to={pathFor(p.slug)} className="block h-full rounded-2xl border border-line bg-cream p-6 hover:border-accent-600">
                <h3 className="text-lg font-bold">{p.nav}</h3>
                <p className="mt-2 text-muted">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
