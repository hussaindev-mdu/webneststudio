import { useCurrency } from './CurrencyProvider'

// Small "$ | ₹" switch for the header. Visitors in India start on ₹, everyone else on $; the choice is remembered.
export default function CurrencyToggle({ className = '' }) {
  const { currency, setCurrency } = useCurrency()
  const btn = (code, symbol, label) => (
    <button
      type="button"
      onClick={() => setCurrency(code)}
      aria-pressed={currency === code}
      aria-label={label}
      className={`h-7 w-8 rounded-full text-sm font-bold transition ${currency === code ? 'bg-accent-600 text-white' : 'text-muted hover:text-head'}`}
    >
      {symbol}
    </button>
  )
  return (
    <div role="group" aria-label="Currency" className={`inline-flex items-center rounded-full border border-line p-0.5 ${className}`}>
      {btn('usd', '$', 'Show prices in US dollars')}
      {btn('inr', '₹', 'Show prices in Indian rupees')}
    </div>
  )
}
