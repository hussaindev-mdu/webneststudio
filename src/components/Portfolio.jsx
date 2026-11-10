import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolio } from '../data/content'
import Reveal from './Reveal'

// `preview` is the shorter home-page version: own heading and no repeated descriptions
export default function Portfolio({ moreHref, moreLabel, title = portfolio.title, subtitle = portfolio.subtitle, preview = false }) {
  return (
    <section id="portfolio" className="section bg-alt">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title">{title}</h2>
          <p className="section-sub">{subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-card">
                <img src={p.image} alt={preview ? `${p.name} website preview` : p.alt || `${p.name} website preview`} width="800" height="560" loading="lazy" decoding="async" className="aspect-[10/7] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-700">{p.category}</span>
                    {!preview && p.label && <span className="rounded-full border border-line px-2 py-0.5 text-xs font-semibold text-muted">{p.label}</span>}
                  </div>
                  <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
                  {!preview && <p className="mt-2 flex-1 text-muted">{p.description}</p>}
                  {!preview && p.service && <Link to={p.service.href} className="mt-3 text-sm font-semibold text-link hover:text-accent-600">{p.service.text}</Link>}
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-link hover:text-accent-600">
                    {p.cta || portfolio.cta} <ExternalLink size={16} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {moreHref && <p className="mt-8 text-center"><Link to={moreHref} className="font-semibold text-link hover:text-accent-600">{moreLabel}</Link></p>}
      </div>
    </section>
  )
}
