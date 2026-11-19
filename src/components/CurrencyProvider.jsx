import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { money, looksLikeIndia } from '../data/currency'

// Currency for the whole site. SSR-safe: the server and the first client render both use USD, then an effect applies the
// visitor's saved choice, or ₹ for visitors in India. `forced` pins a section (the Tamil Nadu page) to one currency.
const Ctx = createContext({ currency: 'usd', forced: false, setCurrency: () => {}, m: (s) => money(s, 'usd') })
const KEY = 'currency'

export function CurrencyProvider({ children, forced }) {
  const [chosen, setChosen] = useState('usd')

  useEffect(() => {
    if (forced) return
    try {
      const saved = localStorage.getItem(KEY)
      if (saved === 'usd' || saved === 'inr') setChosen(saved)
      else if (looksLikeIndia()) setChosen('inr')
    } catch { /* storage blocked: keep the default */ }
  }, [forced])

  const setCurrency = useCallback((c) => {
    setChosen(c)
    try { localStorage.setItem(KEY, c) } catch { /* ignore */ }
  }, [])

  const currency = forced || chosen
  const value = useMemo(
    () => ({ currency, forced: !!forced, setCurrency, m: (s) => money(s, currency) }),
    [currency, forced, setCurrency]
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useCurrency = () => useContext(Ctx)
