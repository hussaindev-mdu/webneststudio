import { Link, useLocation } from 'react-router-dom'
import { brand } from '../data/content'

export function LogoIcon({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" className="fill-brand-900 dark:fill-brand-500" />
      <path d="M16 6 6 14v2h2v9h16v-9h2v-2z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M11 20c2 2.5 8 2.5 10 0" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export default function Logo({ light = false, small = false }) {
  const web = brand.name.replace('Studio', '')
  const home = useLocation().pathname === '/'
  const Tag = home ? 'a' : Link
  const target = home ? { href: '#top' } : { to: '/' }
  return (
    <Tag {...target} className="flex items-center gap-2" aria-label={`${brand.name} home`}>
      <LogoIcon className={small ? 'h-8 w-8' : 'h-9 w-9'} />
      <span className={`font-heading text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-head'}`}>
        {web}
        <span className={light ? 'text-orange-300' : 'text-accent-600'}>Studio</span>
      </span>
    </Tag>
  )
}
