import { Link } from 'react-router-dom'
import { pricing, whatsappLink } from '../data/content'
import { WhatsAppIcon } from './Icons'

// Short call-to-action used on inner pages instead of repeating the full pricing and contact sections.
export default function CtaBand() {
  const [basic, starter] = pricing.packages
  return (
    <section className="section bg-brand-900">
      <div className="container-x max-w-3xl text-center">
        <h2 className="section-title !text-white">Ready for your website?</h2>
        <p className="mt-3 text-lg text-brand-100">
          Packages start at {basic.price} (Basic) and {starter.price} (Starter). Tell us about your business and get a proposal within 24 hours.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link to="/contact/" className="btn-primary">Get a Free Quote</Link>
          <Link to="/pricing/" className="btn border-2 border-white text-white hover:bg-white hover:text-brand-900">See pricing</Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><WhatsAppIcon /> Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
