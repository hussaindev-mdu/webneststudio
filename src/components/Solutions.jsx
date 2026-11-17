import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { solutions, whatsappLink } from '../data/content'
import Reveal from './Reveal'

// Homepage overview of SemmAi services. Only Website Development is live; the rest are labelled Coming Soon.
// Each card has an id so it can be linked as /#whatsapp-ai etc. (no separate pages until a service launches).
export default function Solutions() {
  return (
    <section id="solutions" className="section bg-surface" aria-labelledby="solutions-title">
      <div className="container-x">
        <Reveal>
          <h2 id="solutions-title" className="section-title">{solutions.title}</h2>
          <p className="section-sub">{solutions.subtitle}</p>
        </Reveal>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.items.map((s) => (
            <li key={s.title} id={s.id} className={`flex scroll-mt-24 flex-col rounded-2xl p-6 ${s.soon ? 'border border-dashed border-line bg-cream' : 'bg-brand-900 text-white shadow-card dark:bg-[#1B2437] sm:col-span-2'}`}>
              <p className={`self-start rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${s.soon ? 'border border-line text-muted' : 'bg-accent-600 text-white'}`}>
                {s.soon ? solutions.soon : solutions.live}
              </p>
              <h3 className={`mt-3 text-lg font-bold ${s.soon ? '' : '!text-white'}`}>{s.title}</h3>
              <p className={`mt-2 flex-1 ${s.soon ? 'text-muted' : 'text-brand-100'}`}>{s.text}</p>
              {s.soon ? (
                <a href={whatsappLink(`Hi SemmAi, I would like to know more about ${s.title} when it launches.`)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-link hover:text-accent-600">
                  {s.cta} <ArrowRight size={16} aria-hidden />
                </a>
              ) : (
                <Link to={s.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-white">
                  {s.cta} <ArrowRight size={16} aria-hidden />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
