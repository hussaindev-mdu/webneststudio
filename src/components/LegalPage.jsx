import { Link } from 'react-router-dom'
import { ChevronRight, ExternalLink, Phone } from 'lucide-react'
import Seo from './Seo'
import { WhatsAppIcon } from './Icons'
import { brand, whatsappLink } from '../data/content'
import { metaFor, breadcrumbSchema } from '../data/seo'

// Shared layout for the legal pages (Privacy Policy, Terms & Conditions).
// `doc` supplies the copy; `showPhone` adds a tap-to-call button to the contact block.
export default function LegalPage({ doc, contactIntro, showPhone = false }) {
  const contactNumber = doc.sections.length + 1
  return (
    <>
      <Seo meta={metaFor(doc)} schema={[breadcrumbSchema(doc)]} />

      <section className="bg-gradient-to-b from-cream to-surface pb-10 pt-28 sm:pb-12 sm:pt-36">
        <div className="container-x max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-muted">
            <Link to="/" className="hover:text-accent-600">Home</Link>
            <ChevronRight size={14} aria-hidden />
            <span aria-current="page">{doc.nav}</span>
          </nav>
          <h1 className="text-3xl font-extrabold leading-tight tracking-normal sm:text-5xl sm:tracking-tight">{doc.h1}</h1>
          <p className="mt-4 text-muted">Last updated: <time dateTime={doc.updatedISO}>{doc.updated}</time></p>
        </div>
      </section>

      <section className="section bg-surface !pt-8">
        <div className="container-x max-w-3xl">
          <div className="space-y-10">
            {doc.sections.map((s, i) => (
              <section key={s.heading} aria-labelledby={`p-${i}`}>
                <h2 id={`p-${i}`} className="text-2xl font-extrabold tracking-normal sm:tracking-tight">{i + 1}. {s.heading}</h2>
                {s.paras && s.paras.map((t) => <p key={t} className="mt-3 text-lg text-muted">{t}</p>)}
                {s.bullets && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-6 text-lg text-muted">
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
                {s.after && s.after.map((t) => <p key={t} className="mt-3 text-lg text-muted">{t}</p>)}
                {s.links && (
                  <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                    {s.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-link hover:text-accent-600">
                          {l.label} <ExternalLink size={16} aria-hidden />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section aria-labelledby="p-contact">
              <h2 id="p-contact" className="text-2xl font-extrabold tracking-normal sm:tracking-tight">{contactNumber}. Contact Us</h2>
              <p className="mt-3 text-lg text-muted">{contactIntro}</p>
              <div className="mt-4 flex flex-col gap-3 sm:max-w-sm">
                <a href={`mailto:${brand.email}`} className="btn-outline break-all">{brand.email}</a>
                {showPhone && <a href={`tel:+${brand.whatsappNumber}`} className="btn-outline"><Phone size={20} aria-hidden /> {brand.whatsappDisplay}</a>}
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><WhatsAppIcon /> WhatsApp {brand.whatsappDisplay}</a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
