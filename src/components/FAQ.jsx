import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '../data/content'
import Reveal from './Reveal'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section bg-white">
      <div className="container-x max-w-3xl">
        <Reveal><h2 className="section-title">{faq.title}</h2></Reveal>
        <div className="mt-8 divide-y divide-brand-100 rounded-2xl border border-brand-100">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-brand-900 sm:text-lg"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {item.q}
                    <ChevronDown size={20} aria-hidden className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-5 pb-5 text-muted">
                  {item.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
