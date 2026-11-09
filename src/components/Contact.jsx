import { useState } from 'react'
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { brand, contact, formspreeId, whatsappLink } from '../data/content'
import { WhatsAppIcon } from './Icons'
import Reveal from './Reveal'

const field = 'mt-1 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink focus:border-brand-500'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section bg-brand-900">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="section-title !text-white">{contact.title}</h2>
          <p className="mt-3 text-lg text-brand-100">{contact.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:max-w-sm">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><WhatsAppIcon /> WhatsApp {brand.whatsappDisplay}</a>
            <a href={`mailto:${brand.email}`} className="btn border-2 border-white text-white hover:bg-white hover:text-brand-900"><Mail size={20} aria-hidden /> {brand.email}</a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-card p-6 shadow-card sm:p-8" noValidate={false}>
            <div>
              <label htmlFor="name" className="text-sm font-semibold">Your name</label>
              <input id="name" name="name" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="business" className="text-sm font-semibold">Business name</label>
              <input id="business" name="business" required autoComplete="organization" className={field} />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold">Phone number</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold">Message</label>
              <textarea id="message" name="message" rows="4" required className={field} />
            </div>
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-70">
              {status === 'sending' ? <><Loader2 className="animate-spin" size={20} aria-hidden /> Sending…</> : 'Send Message'}
            </button>
            <div aria-live="polite">
              {status === 'success' && (
                <p className="flex items-start gap-2 rounded-xl bg-green-50 p-3 text-green-800"><CheckCircle2 size={20} className="mt-0.5 shrink-0" aria-hidden /> {contact.successMessage}</p>
              )}
              {status === 'error' && (
                <p className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-red-800"><AlertCircle size={20} className="mt-0.5 shrink-0" aria-hidden /> <span>{contact.errorMessage} <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">Chat on WhatsApp</a></span></p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
