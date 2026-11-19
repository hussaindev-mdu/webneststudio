import { Link } from 'react-router-dom'
import { Zap, MessagesSquare, Tag, Eye, Wrench } from 'lucide-react'
import { about, brand, whatsappLink } from '../data/content'
import { WhatsAppIcon } from './Icons'
import Reveal from './Reveal'
import { Wordmark } from './Logo'
import { useCurrency } from './CurrencyProvider'

const icons = { zap: Zap, message: MessagesSquare, tag: Tag, eye: Eye, wrench: Wrench }

export default function About() {
  const { m } = useCurrency()
  return (
    <section id="about" className="section bg-alt">
      <div className="container-x grid items-center gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          {about.photo ? (
            <img src={about.photo} alt={brand.owner} loading="lazy" width="480" height="480" className="mx-auto aspect-square w-full max-w-sm rounded-3xl object-cover shadow-card" />
          ) : (
            <div className="mx-auto flex aspect-square w-full max-w-sm flex-col items-center justify-center gap-4 rounded-3xl bg-tint" role="img" aria-label={`${brand.name} logo`}>
              <img src="/logo.png" alt="" width="512" height="512" loading="lazy" decoding="async" className="h-40 w-40 sm:h-48 sm:w-48" />
              <Wordmark className="h-12" />
              <span className="text-sm font-semibold text-accent-700 dark:text-accent-300">{brand.tagline}</span>
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <h2 className="section-title">{about.title.replace('{owner}', brand.owner)}</h2>
          {about.bio.map((p) => (
            <p key={p} className="mt-4 text-lg text-muted">{p}</p>
          ))}
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.reasons.map((r) => {
              const Icon = icons[r.icon] || Zap
              return (
                <li key={r.title} className="rounded-xl bg-card p-4 shadow-card">
                  <Icon size={22} className="text-accent-600" aria-hidden />
                  <h3 className="mt-2 font-bold">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted">{m(r.text)}</p>
                </li>
              )
            })}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact/" className="btn-primary">Get a Free Quote</Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {about.links.map((l) => (
              <Link key={l.href} to={l.href} className="font-semibold text-link hover:text-accent-600">{l.label}</Link>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
