// Every price shown on the site lives here. Text in the data files uses {tokens} such as {basic};
// money() turns them into "$49" or "₹4,999".
//
//  - Default currency is USD: the prerendered HTML, page titles/descriptions and Google see dollars.
//  - Visitors in India are switched to ₹ after the page loads, and anyone can use the $ / ₹ switch in the header
//    (see components/CurrencyProvider.jsx). The Tamil Nadu page is always shown in ₹.
//  - To change a price, edit it here only. USD prices were set from ~₹95 per $1 and rounded.
export const PRICES = {
  basic: { usd: '$49', inr: '₹4,999' },
  basicWas: { usd: '$99', inr: '₹9,999' }, // crossed-out launch price
  starter: { usd: '$99', inr: '₹9,999' },
  starterWas: { usd: '$159', inr: '₹15,999' }, // crossed-out launch price
  maintYearMonthly: { usd: '$4', inr: '₹375' }, // maintenance, billed yearly: per month
  maintYearTotal: { usd: '$48', inr: '₹4,500' }, // ...and per year
  maintHalfMonthly: { usd: '$5', inr: '₹500' }, // maintenance, billed every 6 months: per month
  maintHalfTotal: { usd: '$30', inr: '₹3,000' }, // ...and per 6 months
  domainCost: { usd: '$10–15', inr: '₹800–1,200' }, // typical domain name cost per year
}

// numeric starting price (for structured data)
export const PRICE_NUM = { basic: { usd: 49, inr: 4999 } }

const TOKEN = new RegExp(`\\{(${Object.keys(PRICES).join('|')})\\}`, 'g')

// Replace {tokens} in a string with prices in the given currency ('usd' | 'inr'). Other text and other {braces} are left alone.
export const money = (text, currency = 'usd') =>
  typeof text === 'string' ? text.replace(TOKEN, (_, key) => PRICES[key][currency]) : text

// Browser only (call inside an effect). True for visitors whose timezone or language says India.
export const looksLikeIndia = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    return tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta' || /-IN$/i.test(navigator.language || '')
  } catch {
    return false
  }
}
