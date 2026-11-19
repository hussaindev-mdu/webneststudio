import { brand } from './content'
import { PRICES, PRICE_NUM, money } from './currency'
import { pages } from './pages'
import { privacy } from './privacy'
import { terms } from './terms'

export const SITE = {
  url: 'https://semmai.net',
  name: brand.name,
  ogImage: 'https://semmai.net/og-image.jpg',
}

export const pathFor = (slug) => (slug ? `/${slug}/` : '/')
export const urlFor = (slug) => SITE.url + pathFor(slug)

// Page titles and descriptions are written with {price tokens} in the data files and fixed to one currency here:
// US dollars by default (this is what Google and the prerendered HTML show); the Tamil Nadu page uses rupees (page.currency).
export const pageCurrency = (page) => page.currency || 'usd'

export const homeMeta = {
  path: '/',
  title: 'Affordable Website Development for Small Businesses | SemmAI',
  description: money(
    'Websites for restaurants, clinics, real estate and small businesses in the US and India from {basic}. Delivered in 6 working days after advance payment and content.'
  ),
}

export const metaFor = (page) => ({
  path: pathFor(page.slug),
  title: money(page.title, pageCurrency(page)),
  description: money(page.description, pageCurrency(page)),
  ...(page.localeAlternate ? { localeAlternate: page.localeAlternate } : {}),
})

// every indexable page, used for prerendering and the sitemap
export const routes = [homeMeta, ...pages.map(metaFor), metaFor(privacy), metaFor(terms)]

const ORG_ID = `${SITE.url}/#organization`

// Only real profiles go in sameAs; the placeholder links in content.js are skipped until replaced.
const sameAs = [brand.instagram, brand.facebook].filter((u) => u && !/yourhandle|yourpage/.test(u))

// Defined once, on the home page. Other pages refer to it with an inline minimal reference.
const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: brand.name,
  url: SITE.url + '/',
  logo: `${SITE.url}/logo.png`,
  slogan: brand.tagline,
  description: 'SemmAI is an independently run technology company serving businesses online in the US and India. It builds websites today, with WhatsApp AI assistants, AI customer support, business automation and custom software planned.',
  email: brand.email,
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', telephone: '+' + brand.whatsappNumber, email: brand.email, areaServed: ['IN', 'US'], availableLanguage: ['en'] }],
  ...(sameAs.length ? { sameAs } : {}),
}

export const homeSchema = [
  organization,
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: brand.name,
    url: SITE.url + '/',
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
  },
]

// Service area for the Tamil Nadu page: a service area only, not a business location (no LocalBusiness / address).
const tamilNaduArea = [
  { '@type': 'State', name: 'Tamil Nadu' },
  ...['Chennai', 'Madurai', 'Coimbatore', 'Tiruchirappalli', 'Salem'].map((name) => ({ '@type': 'City', name })),
]

// Starting price = the Basic package (currency.js). An Offer is added only to pages whose own text states that price
// ("from {basic}" in the description, and "Packages start at ..." on the page), so the markup matches what visitors see.
// US-facing pages list a dollar and a rupee offer (visitors can see either); the Tamil Nadu page lists rupees only.
// No availability or other claims are made.
const startOffer = (cur) => ({
  '@type': 'Offer',
  url: urlFor('pricing'),
  priceCurrency: cur.toUpperCase(),
  priceSpecification: { '@type': 'PriceSpecification', minPrice: PRICE_NUM.basic[cur], priceCurrency: cur.toUpperCase() },
  description: `Website packages start at ${PRICES.basic[cur]} (one-time development fee).`,
})

export const serviceSchema = (page) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: page.h1,
  serviceType: page.serviceType || page.nav,
  description: money(page.description, pageCurrency(page)),
  url: urlFor(page.slug),
  areaServed: page.slug === 'website-development-tamil-nadu' ? tamilNaduArea : [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'India' }],
  '@id': `${urlFor(page.slug)}#service`,
  provider: { '@type': 'Organization', '@id': ORG_ID, name: brand.name, url: SITE.url + '/' },
  ...(page.description.includes('{basic}') || page.description.includes(PRICES.basic.inr)
    ? { offers: pageCurrency(page) === 'inr' ? [startOffer('inr')] : [startOffer('usd'), startOffer('inr')] }
    : {}),
})

export const breadcrumbSchema = (page) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' },
    { '@type': 'ListItem', position: 2, name: page.nav, item: urlFor(page.slug) },
  ],
})

export const faqSchema = (items, currency = 'usd') => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: money(i.q, currency), acceptedAnswer: { '@type': 'Answer', text: money(i.a, currency) } })),
})
