import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-surface">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title">{testimonials.title}</h2>
          {testimonials.subtitle && <p className="section-sub">{testimonials.subtitle}</p>}
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="h-full rounded-2xl border border-line bg-cream p-6">
                <Quote size={28} className="text-accent-600" aria-hidden />
                <blockquote className="mt-3 text-ink">{t.quote}</blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <p className="font-semibold text-head">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
