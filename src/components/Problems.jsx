import { Search, Smartphone, CalendarCheck } from 'lucide-react'
import { problems } from '../data/content'
import Reveal from './Reveal'

const icons = { search: Search, smartphone: Smartphone, calendar: CalendarCheck }

export default function Problems() {
  return (
    <section id="problems" className="section bg-surface">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title">{problems.title}</h2>
          <p className="section-sub">{problems.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {problems.items.map((p, i) => {
            const Icon = icons[p.icon] || Search
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-cream p-6 shadow-card">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-white"><Icon size={24} aria-hidden /></span>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
