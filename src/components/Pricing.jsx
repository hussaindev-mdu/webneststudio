import { Check } from 'lucide-react'
import { pricing, whatsappLink } from '../data/content'
import Reveal from './Reveal'

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title">{pricing.title}</h2>
          <p className="section-sub">{pricing.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08}>
              <div className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 ${pkg.popular ? 'bg-brand-900 text-white shadow-card ring-4 ring-accent-500/40' : 'border border-brand-100 bg-cream'}`}>
                {(pkg.badge || pkg.popular) && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">{pkg.badge || 'Most Popular'}</span>
                )}
                <h3 className={`text-xl font-bold ${pkg.popular ? '!text-white' : ''}`}>{pkg.name}</h3>
                <p className={`mt-1 text-sm ${pkg.popular ? 'text-brand-100' : 'text-muted'}`}>{pkg.description}</p>
                <p className="mt-5 flex flex-wrap items-baseline gap-x-2">
                  <span className={`font-heading text-4xl font-extrabold ${pkg.popular ? 'text-white' : 'text-brand-900'}`}>{pkg.price}</span>
                  <span className={`text-sm ${pkg.popular ? 'text-brand-100' : 'text-muted'}`}>{pkg.period}</span>
                </p>
                {pkg.highlight && (
                  <p className="mt-5 rounded-xl bg-accent-50 px-4 py-3 text-center text-sm font-bold text-accent-700 ring-1 ring-accent-500/30">{pkg.highlight}</p>
                )}
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={18} className={`mt-0.5 shrink-0 ${pkg.popular ? 'text-orange-300' : 'text-accent-600'}`} aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hi WebNestStudio, I'm interested in the ${pkg.name} package (${pkg.price}${pkg.period.startsWith('per month') ? '/month' : ''}). Can we talk?`)}
                  target="_blank" rel="noopener noreferrer"
                  className={`mt-8 ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  {pricing.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
