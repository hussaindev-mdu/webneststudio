import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pricing, whatsappLink } from '../data/content'
import Reveal from './Reveal'

// `previewFeatures` limits each card to its first N features (home-page preview), plus the package's `previewNote`
// (the clarification that must never be hidden); the full list lives on /pricing/
export default function Pricing({ moreHref, moreLabel, title = pricing.title, subtitle = pricing.subtitle, previewFeatures }) {
  return (
    <section id="pricing" className="section bg-surface">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title">{title}</h2>
          <p className="section-sub">{subtitle}</p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {pricing.packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08}>
              <div className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 ${pkg.popular ? 'bg-brand-900 text-white shadow-card ring-4 ring-accent-500/40 dark:bg-brand-800' : 'border border-line bg-cream'}`}>
                {(pkg.badge || pkg.popular) && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">{pkg.badge || 'Most Popular'}</span>
                )}
                <h3 className={`text-xl font-bold ${pkg.popular ? '!text-white' : ''}`}>{pkg.name}{pkg.nameNote && <span className="ml-2 text-base font-medium text-muted">({pkg.nameNote})</span>}</h3>
                <p className={`mt-1 text-sm ${pkg.popular ? 'text-brand-100' : 'text-muted'}`}>{pkg.description}</p>
                {pkg.originalPrice && pricing.offer && (
                  <p className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${pkg.popular ? 'bg-white/15 text-orange-200' : 'bg-accent-50 text-accent-700 dark:bg-accent-500/15 dark:text-orange-300'}`}>{pricing.offer}</p>
                )}
                <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
                  {pkg.originalPrice && (
                    <span className={`text-xl font-semibold line-through ${pkg.popular ? 'text-brand-100' : 'text-muted'}`}><span className="sr-only">Original price </span>{pkg.originalPrice}</span>
                  )}
                  <span className={`font-heading text-4xl font-extrabold ${pkg.popular ? 'text-white' : 'text-head'}`}>{pkg.price}</span>
                  <span className={`text-sm ${pkg.popular ? 'text-brand-100' : 'text-muted'}`}>{pkg.period}</span>
                </p>
                {pkg.highlight && (
                  <p className="mt-5 rounded-xl bg-accent-50 px-4 py-3 text-center text-sm font-bold text-accent-700 ring-1 dark:bg-accent-500/15 dark:text-orange-300 ring-accent-500/30">{pkg.highlight}</p>
                )}
                <ul className="mt-6 flex-1 space-y-3">
                  {(previewFeatures ? [...pkg.features.slice(0, previewFeatures), ...(pkg.previewNote && !pkg.features.slice(0, previewFeatures).includes(pkg.previewNote) ? [pkg.previewNote] : [])] : pkg.features).map((f) => (
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
        {moreHref && <p className="mt-8 text-center"><Link to={moreHref} className="font-semibold text-link hover:text-accent-600">{moreLabel}</Link></p>}
        {pricing.finePrint && <p className="mt-6 text-center text-xs text-muted">{pricing.finePrint}</p>}
      </div>
    </section>
  )
}
