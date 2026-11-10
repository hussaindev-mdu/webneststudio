import { Link } from 'react-router-dom'
import { Check, ExternalLink, ChevronRight } from 'lucide-react'
import Seo from './Seo'
import Reveal from './Reveal'
import Pricing from './Pricing'
import Portfolio from './Portfolio'
import FAQ from './FAQ'
import Contact from './Contact'
import CtaBand from './CtaBand'
import { WhatsAppIcon } from './Icons'
import { pages } from '../data/pages'
import { portfolio, whatsappLink } from '../data/content'
import { metaFor, pathFor, breadcrumbSchema, serviceSchema, faqSchema } from '../data/seo'

// One template for every extra SEO page (services, pricing, portfolio, contact).
export default function LandingPage({ page }) {
  // the closing band already links to Pricing, so don't repeat it in the related list
  const bandHasPricing = page.slug !== 'contact' && page.slug !== 'pricing'
  const related = (page.related || [])
    .filter((s) => !(s === 'pricing' && bandHasPricing))
    .map((s) => pages.find((p) => p.slug === s))
    .filter(Boolean)
  const demo = page.demo && portfolio.projects.find((p) => p.name === page.demo)
  const isService = page.slug.endsWith('design') || page.slug === 'website-development'
  const schema = [breadcrumbSchema(page), isService && serviceSchema(page), page.faq && faqSchema(page.faq)]

  return (
    <>
      <Seo meta={metaFor(page)} schema={schema} />

      <section className="bg-gradient-to-b from-cream to-surface pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="container-x max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-muted">
            <Link to="/" className="hover:text-accent-600">Home</Link>
            <ChevronRight size={14} aria-hidden />
            <span aria-current="page">{page.nav}</span>
          </nav>
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-normal sm:text-5xl sm:tracking-tight">{page.h1}</h1>
          <p className="mt-5 max-w-3xl text-lg text-muted">{page.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {page.slug !== 'contact' && <Link to="/contact/" className="btn-primary">Get a Free Quote</Link>}
            <a href={whatsappLink(`Hi WebNestStudio, I'm interested in ${page.nav.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {page.includes?.length > 0 && (
        <section className="section bg-surface">
          <div className="container-x">
            <Reveal><h2 className="section-title">What you get</h2></Reveal>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {page.includes.map((f) => (
                <li key={f.title} className="rounded-2xl border border-line bg-cream p-6">
                  <h3 className="flex items-start gap-2 text-lg font-bold"><Check size={20} className="mt-0.5 shrink-0 text-accent-600" aria-hidden />{f.title}</h3>
                  <p className="mt-2 text-muted">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.sections.map((s, i) => (
        <section key={s.heading} className={`section ${i % 2 === 0 ? 'bg-alt' : 'bg-surface'}`}>
          <div className="container-x max-w-3xl">
            <Reveal>
              <h2 className="section-title">{s.heading}</h2>
              {s.paras.map((t) => <p key={t} className="mt-4 text-lg text-muted">{t}</p>)}
              {s.bullets && (
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2"><Check size={18} className="mt-1 shrink-0 text-accent-600" aria-hidden />{b}</li>
                  ))}
                </ul>
              )}
              {demo && i === page.sections.length - 1 && (
                <a href={demo.link} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6">
                  View the {demo.name} demo <ExternalLink size={16} aria-hidden />
                </a>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      {page.show.includes('portfolio') && <Portfolio />}
      {page.show.includes('pricing') && <Pricing />}
      {page.faq && <FAQ items={page.faq} title={`${page.nav}: common questions`} />}

      {related.length > 0 && (
        <section className="section bg-alt" aria-labelledby="related-title">
          <div className="container-x">
            <h2 id="related-title" className="section-title">{page.slug === 'contact' ? 'Explore more' : 'Related services'}</h2>
            <ul className={`mt-6 grid gap-4 sm:grid-cols-2 ${related.length > 5 ? 'lg:grid-cols-3' : related.length > 4 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
              {related.map((p) => (
                <li key={p.slug}>
                  <Link to={pathFor(p.slug)} className="block h-full rounded-2xl bg-card p-5 font-semibold text-head shadow-card hover:text-accent-600">{p.linkText || p.nav}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.slug === 'contact' ? <Contact /> : <CtaBand showPricing={page.slug !== 'pricing'} />}
    </>
  )
}
