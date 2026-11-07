import { ExternalLink } from 'lucide-react'
import { portfolio } from '../data/content'
import Reveal from './Reveal'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-brand-50">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title">{portfolio.title}</h2>
          <p className="section-sub">{portfolio.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card">
                <img src={p.image} alt={`${p.name} website preview`} width="800" height="560" loading="lazy" decoding="async" className="aspect-[10/7] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-700">{p.category}</span>
                  <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{p.description}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-accent-600">
                    {portfolio.cta} <ExternalLink size={16} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
