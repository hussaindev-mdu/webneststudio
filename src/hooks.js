import { useLocation } from 'react-router-dom'

// In-page anchors work on the home page; elsewhere they point back to it ("/#pricing").
export function useAnchor() {
  const home = useLocation().pathname === '/'
  return (href) => (href.startsWith('#') && !home ? '/' + href : href)
}
