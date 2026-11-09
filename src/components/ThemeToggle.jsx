import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function readTheme() {
  try {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function ThemeToggle({ className = '' }) {
  // start light so server and client markup match; the saved theme is read after mount
  const [theme, setTheme] = useState('light')
  useEffect(() => { setTheme(readTheme()) }, [])

  function choose(next) {
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    try { localStorage.setItem('theme', next) } catch { /* storage may be blocked */ }
  }

  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={() => choose(dark ? 'light' : 'dark')}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`rounded-full p-2 text-head transition hover:bg-tint ${className}`}
    >
      {dark ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
    </button>
  )
}
