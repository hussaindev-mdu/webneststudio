import { Check } from 'lucide-react'
import { brand, hero, whatsappLink } from '../data/content'
import { WhatsAppIcon } from './Icons'
import Reveal from './Reveal'

export default function Hero() {
  const headline = hero.headline.replace('{niche}', brand.niche).replace('{city}', brand.city)
  return (
    <section id="top" className="bg-gradient-to-b from-cream to-white pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 inline-block rounded-full bg-accent-50 px-3 py-1 text-sm font-semibold text-accent-700">{hero.eyebrow || brand.tagline}</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{headline}</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{hero.subtext}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#portfolio" className="btn-primary">{hero.primaryCta}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon /> {hero.secondaryCta}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
            {hero.badges.map((b) => (
              <li key={b} className="flex items-center gap-1.5"><Check size={16} className="text-accent-600" aria-hidden /> {b}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          {/* Hero image loads eagerly (above the fold) */}
          <img src="/images/hero-devices.svg" alt="Website displayed on a laptop and a phone" width="640" height="480" className="mx-auto w-full max-w-lg" fetchPriority="high" />
        </Reveal>
      </div>
    </section>
  )
}
