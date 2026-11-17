import { brand, pricing } from './content'
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

export const homeMeta = {
  path: '/',
  title: 'Affordable Website Development in India | SemmAI',
  description:
    'Websites for restaurants, clinics, real estate and small businesses across India from ₹5,999. Delivered in 6 working days after advance payment and content.',
}

export const metaFor = (page) => ({ path: pathFor(page.slug), title: page.title, description: page.description, ...(page.localeAlternate ? { localeAlternate: page.localeAlternate } : {}) })

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
  description: 'SemmAI is an independently run technology company serving businesses online across India. It builds websites today, with WhatsApp AI assistants, AI customer support, business automation and custom software planned.',
  email: brand.email,
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', telephone: '+' + brand.whatsappNumber, email: brand.email, areaServed: 'IN', availableLanguage: ['en'] }],
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
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  },
]

// Service area for the Tamil Nadu page: a service area only, not a business location (no LocalBusiness / address).
const tamilNaduArea = [
  { '@type': 'State', name: 'Tamil Nadu' },
  ...['Chennai', 'Madurai', 'Coimbatore', 'Tiruchirappalli', 'Salem'].map((name) => ({ '@type': 'City', name })),
]

// Starting price = the lowest package in content.js (Basic). An Offer is added only to pages whose own text states
// that price ("from ₹5,999" in the description, and "Packages start at ₹5,999" on the page), so the markup matches
// what visitors see. No availability or other claims are made.
const START_PRICE_TEXT = pricing.packages[0].price
const START_PRICE = Number(START_PRICE_TEXT.replace(/[^\d]/g, ''))

export const serviceSchema = (page) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: page.h1,
  serviceType: page.serviceType || page.nav,
  description: page.description,
  url: urlFor(page.slug),
  areaServed: page.slug === 'website-development-tamil-nadu' ? tamilNaduArea : { '@type': 'Country', name: 'India' },
  '@id': `${urlFor(page.slug)}#service`,
  provider: { '@type': 'Organization', '@id': ORG_ID, name: brand.name, url: SITE.url + '/' },
  ...(page.description.includes(START_PRICE_TEXT)
    ? {
        offers: {
          '@type': 'Offer',
          url: urlFor('pricing'),
          priceCurrency: 'INR',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: START_PRICE, priceCurrency: 'INR' },
          description: `Website packages start at ${START_PRICE_TEXT} (one-time development fee).`,
        },
      }
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

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
})
