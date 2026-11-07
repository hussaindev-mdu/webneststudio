import { process } from '../data/content'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="process" className="section bg-cream">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title">{process.title}</h2>
          <p className="section-sub">{process.subtitle}</p>
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-600 font-heading text-lg font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <p className="mx-auto mt-10 w-fit rounded-full bg-brand-900 px-6 py-3 text-center font-semibold text-white">{process.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
