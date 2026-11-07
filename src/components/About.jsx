import { Zap, MessagesSquare, ShieldCheck, User } from 'lucide-react'
import { about, brand } from '../data/content'
import Reveal from './Reveal'

const icons = { zap: Zap, message: MessagesSquare, shield: ShieldCheck }

export default function About() {
  return (
    <section id="about" className="section bg-brand-50">
      <div className="container-x grid items-center gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          {about.photo ? (
            <img src={about.photo} alt={brand.owner} loading="lazy" width="480" height="480" className="mx-auto aspect-square w-full max-w-sm rounded-3xl object-cover shadow-card" />
          ) : (
            <div className="mx-auto flex aspect-square w-full max-w-sm flex-col items-center justify-center gap-2 rounded-3xl bg-brand-100 text-brand-700" role="img" aria-label="Photo placeholder">
              <User size={72} aria-hidden />
              <span className="text-sm font-semibold">Your photo here</span>
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <h2 className="section-title">{about.title.replace('{owner}', brand.owner)}</h2>
          {about.bio.map((p) => (
            <p key={p} className="mt-4 text-lg text-muted">{p}</p>
          ))}
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {about.reasons.map((r) => {
              const Icon = icons[r.icon] || Zap
              return (
                <li key={r.title} className="rounded-xl bg-white p-4 shadow-card">
                  <Icon size={22} className="text-accent-600" aria-hidden />
                  <h3 className="mt-2 font-bold">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted">{r.text}</p>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
