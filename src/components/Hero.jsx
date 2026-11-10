import { Check } from 'lucide-react'
import { brand, hero, whatsappLink } from '../data/content'
import { WhatsAppIcon } from './Icons'
import Reveal from './Reveal'
import Hero3D from './Hero3D'

export default function Hero() {
  const headline = hero.headline.replace('{niche}', brand.niche).replace('{city}', brand.city)
  return (
    <section id="top" className="bg-gradient-to-b from-cream to-surface pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <p className="rounded-full bg-accent-50 px-2.5 py-1 text-xs font-semibold sm:px-3 sm:text-sm text-accent-700 dark:bg-accent-500/15 dark:text-orange-300">{hero.eyebrow || brand.tagline}</p>
            {hero.label && <p className="rounded-full bg-accent-600 px-2.5 py-1 text-xs font-bold text-white sm:px-3 sm:text-sm">{hero.label}</p>}
          </div>
          <h1 className="text-balance text-[2rem] font-extrabold leading-tight tracking-normal sm:text-wrap sm:text-5xl sm:tracking-tight">{headline}</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{hero.subtext}</p>
          <p className="mt-6 max-w-xl font-semibold text-head">{hero.proposalLine}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">{hero.primaryCta}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon /> {hero.secondaryCta}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
            {hero.badges.map((b) => (
              <li key={b} className="flex items-center gap-1.5"><Check size={16} className="text-accent-600" aria-hidden /> {b}</li>
            ))}
          </ul>
          {hero.deliveryNote && <p className="mt-4 max-w-xl text-xs text-muted">{hero.deliveryNote}</p>}
        </Reveal>
        <Reveal delay={0.15}>
          <Hero3D />
        </Reveal>
      </div>
    </section>
  )
}
