import { useEffect } from 'react'
import { SITE } from '../data/seo'

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) { el = create(); document.head.appendChild(el) }
  el.setAttribute(attr, value)
}
const meta = (key, val) => () => { const m = document.createElement('meta'); m.setAttribute(key, val); return m }

// Updates the head on client-side navigation (the prerender step writes the same tags into the HTML)
// and renders JSON-LD structured data.
export default function Seo({ meta: m, schema, noindex = false }) {
  useEffect(() => {
    document.title = m.title
    const url = SITE.url + m.path
    setTag('meta[name="description"]', meta('name', 'description'), 'content', m.description)
    setTag('meta[property="og:title"]', meta('property', 'og:title'), 'content', m.title)
    setTag('meta[property="og:description"]', meta('property', 'og:description'), 'content', m.description)
    setTag('meta[property="og:url"]', meta('property', 'og:url'), 'content', url)
    setTag('link[rel="canonical"]', () => { const l = document.createElement('link'); l.rel = 'canonical'; return l }, 'href', url)
    if (m.localeAlternate) setTag('meta[property="og:locale:alternate"]', meta('property', 'og:locale:alternate'), 'content', m.localeAlternate)
    else document.head.querySelector('meta[property="og:locale:alternate"]')?.remove()
    const robots = document.head.querySelector('meta[name="robots"]')
    if (noindex) setTag('meta[name="robots"]', meta('name', 'robots'), 'content', 'noindex')
    else if (robots) robots.remove()
  }, [m, noindex])

  const items = (Array.isArray(schema) ? schema : schema ? [schema] : []).filter(Boolean)
  return items.map((s, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, '\\u003c') }} />
  ))
}
