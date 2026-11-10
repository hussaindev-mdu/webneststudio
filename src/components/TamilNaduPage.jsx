import { Link } from 'react-router-dom'
import { Check, ExternalLink, ChevronRight } from 'lucide-react'
import Seo from './Seo'
import Reveal from './Reveal'
import FAQ from './FAQ'
import { WhatsAppIcon } from './Icons'
import { portfolio, whatsappLink } from '../data/content'
import { en, ta, tnWhatsAppMessage } from '../data/tamilNadu'
import { metaFor, pathFor, breadcrumbSchema, serviceSchema, faqSchema } from '../data/seo'

// Language switcher: plain in-page anchors, so it works without JavaScript and both languages stay in the HTML.
function LangSwitch({ current, label }) {
  const base = 'inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-semibold'
  const on = 'bg-accent-600 text-white'
  const off = 'text-head hover:text-accent-600'
  return (
    <nav aria-label="Language / மொழி" className="inline-flex items-center gap-1 rounded-full border border-line bg-card p-1">
      <span className="sr-only">{label}</span>
      <a href="#english" lang="en" aria-current={current === 'en' ? 'true' : undefined} className={`${base} ${current === 'en' ? on : off}`}>English</a>
      <a href="#tamil" lang="ta" aria-current={current === 'ta' ? 'true' : undefined} className={`${base} ${current === 'ta' ? on : off}`}>தமிழ்</a>
    </nav>
  )
}

function Hero({ c, current, page, first }) {
  const H = first ? 'h1' : 'h2'
  return (
    <section id={c.id} lang={c.lang} className={`bg-gradient-to-b from-cream to-surface pb-12 sm:pb-16 ${first ? 'pt-28 sm:pt-36' : 'pt-16 sm:pt-20'}`}>
      <div className="container-x max-w-4xl">
        {first && (
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-muted">
            <Link to="/" className="hover:text-accent-600">Home</Link>
            <ChevronRight size={14} aria-hidden />
            <span aria-current="page">{page.nav}</span>
          </nav>
        )}
        <LangSwitch current={current} label={c.hero.switchLabel} />
        <H className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-normal sm:text-5xl sm:tracking-tight">{c.hero.h1}</H>
        <p className="mt-5 max-w-3xl text-lg text-muted">{c.hero.intro}</p>
        <p className="mt-4 max-w-3xl rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink">{c.hero.note}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact/" className="btn-primary">{c.hero.quote}</Link>
          <a href={whatsappLink(tnWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><WhatsAppIcon /> {c.hero.whatsapp}</a>
        </div>
      </div>
    </section>
  )
}

const Bullets = ({ items }) => (
  <ul className="mt-5 space-y-2">
    {items.map((b) => <li key={b} className="flex items-start gap-2"><Check size={18} className="mt-1 shrink-0 text-accent-600" aria-hidden />{b}</li>)}
  </ul>
)

function Block({ c, tone }) {
  const alt = (i) => ((i + tone) % 2 === 0 ? 'bg-alt' : 'bg-surface')
  const projects = c.portfolio.projects.map((p) => ({ ...p, ...portfolio.projects.find((x) => x.name === p.key) }))
  return (
    <div lang={c.lang}>
      <section className={`section ${alt(0)}`}>
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="section-title">{c.why.heading}</h2>
            {c.why.paras.map((t) => <p key={t} className="mt-4 text-lg text-muted">{t}</p>)}
            <Bullets items={c.why.bullets} />
          </Reveal>
        </div>
      </section>

      <section className={`section ${alt(1)}`}>
        <div className="container-x">
          <Reveal>
            <h2 className="section-title">{c.services.heading}</h2>
            <p className="section-sub">{c.services.intro}</p>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map((s) => (
              <li key={s.title} className="rounded-2xl border border-line bg-cream p-6">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
                <Link to={pathFor(s.link.slug)} className="mt-3 inline-block text-sm font-semibold text-link hover:text-accent-600">{s.link.text}{c.services.linkSuffix}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${alt(2)}`}>
        <div className="container-x">
          <Reveal>
            <h2 className="section-title">{c.areas.heading}</h2>
            <p className="section-sub">{c.areas.intro}</p>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.areas.cities.map((city) => (
              <li key={city.name} className="rounded-2xl bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold">{city.name}</h3>
                <p className="mt-2 text-muted">{city.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl font-semibold text-head">{c.areas.note}</p>
        </div>
      </section>

      <section className={`section ${alt(3)}`}>
        <div className="container-x">
          <Reveal><h2 className="section-title">{c.whyUs.heading}</h2></Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.whyUs.items.map((f) => (
              <li key={f.title} className="rounded-2xl border border-line bg-cream p-6">
                <h3 className="flex items-start gap-2 text-lg font-bold"><Check size={20} className="mt-0.5 shrink-0 text-accent-600" aria-hidden />{f.title}</h3>
                <p className="mt-2 text-muted">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${alt(4)}`}>
        <div className="container-x">
          <Reveal>
            <h2 className="section-title">{c.pricing.heading}</h2>
            <p className="section-sub">{c.pricing.intro}</p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {c.pricing.packages.map((pkg) => (
              <div key={pkg.name} lang="en" className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 ${pkg.popular ? 'bg-brand-900 text-white shadow-card ring-4 ring-accent-500/40 dark:bg-brand-800' : 'border border-line bg-cream'}`}>
                {pkg.popular && <span lang={c.lang} className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">{c.pricing.popular}</span>}
                <h3 className={`text-xl font-bold ${pkg.popular ? '!text-white' : ''}`}>{pkg.name}</h3>
                <p lang={c.lang} className={`mt-1 text-sm ${pkg.popular ? 'text-brand-100' : 'text-muted'}`}>{pkg.text}</p>
                <p className={`mt-4 font-heading text-4xl font-extrabold ${pkg.popular ? 'text-white' : 'text-head'}`}>{pkg.price}</p>
                <ul lang={c.lang} className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><Check size={18} className={`mt-0.5 shrink-0 ${pkg.popular ? 'text-orange-300' : 'text-accent-600'}`} aria-hidden /><span>{f}</span></li>
                  ))}
                </ul>
                <a href={whatsappLink(`Hi WebNestStudio, I'm interested in the ${pkg.name} package (${pkg.price}). Can we talk?`)} target="_blank" rel="noopener noreferrer" className={`mt-8 ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}>
                  <span lang={c.lang}>{c.pricing.cta}</span>
                </a>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-2 text-center text-muted">
            {c.pricing.notes.map((n) => <p key={n}>{n}</p>)}
            <p><Link to={c.pricing.moreLink.href} className="font-semibold text-link hover:text-accent-600">{c.pricing.moreLink.text}</Link></p>
          </div>
        </div>
      </section>

      <section className={`section ${alt(5)}`}>
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="section-title">{c.delivery.heading}</h2>
            {c.delivery.paras.map((t) => <p key={t} className="mt-4 text-lg text-muted">{t}</p>)}
          </Reveal>
        </div>
      </section>

      <section className={`section ${alt(6)}`}>
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="section-title">{c.maintenance.heading}</h2>
            {c.maintenance.paras.map((t) => <p key={t} className="mt-4 text-lg text-muted">{t}</p>)}
            <Bullets items={c.maintenance.bullets} />
            {c.maintenance.after.map((t) => <p key={t} className="mt-4 text-lg text-muted">{t}</p>)}
            <p className="mt-4"><Link to={c.maintenance.link.href} className="font-semibold text-link hover:text-accent-600">{c.maintenance.link.text}</Link></p>
          </Reveal>
        </div>
      </section>

      <section className={`section ${alt(7)}`}>
        <div className="container-x">
          <Reveal>
            <h2 className="section-title">{c.portfolio.heading}</h2>
            <p className="section-sub">{c.portfolio.intro}</p>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <li key={p.key} className="flex flex-col rounded-2xl bg-card p-6 shadow-card">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-700">{p.category}</span>
                  <span className="rounded-full border border-line px-2 py-0.5 text-xs font-semibold text-muted">{p.label}</span>
                </div>
                <h3 lang="en" className="mt-1 text-xl font-bold">{p.name}</h3>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-link hover:text-accent-600">
                  {p.cta} <ExternalLink size={16} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8"><Link to={c.portfolio.more.href} className="font-semibold text-link hover:text-accent-600">{c.portfolio.more.text}</Link></p>
        </div>
      </section>

      <FAQ items={c.faq.items} title={c.faq.heading} id={`faq-${c.id}`} />

      <section className="section bg-brand-900">
        <div className="container-x max-w-3xl text-center">
          <h2 className="section-title !text-white">{c.cta.heading}</h2>
          <p className="mt-3 text-lg text-brand-100">{c.cta.text}</p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link to="/contact/" className="btn-primary">{c.cta.quote}</Link>
            <a href={whatsappLink(tnWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><WhatsAppIcon /> {c.cta.whatsapp}</a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Bilingual landing page: the English version first, then the Tamil version, each with the same sections.
export default function TamilNaduPage({ page }) {
  // FAQPage markup only for the English questions, which are word-for-word the ones shown on the page
  const schema = [breadcrumbSchema(page), serviceSchema(page), faqSchema(en.faq.items)]
  return (
    <>
      <Seo meta={metaFor(page)} schema={schema} />
      <Hero c={en} current="en" page={page} first />
      <Block c={en} tone={0} />
      <Hero c={ta} current="ta" page={page} />
      <Block c={ta} tone={0} />
    </>
  )
}
