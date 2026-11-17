import { useLocation } from 'react-router-dom'

// In-page anchors work on the home page; elsewhere they point back to it ("/#pricing").
export function useAnchor() {
  const home = useLocation().pathname === '/'
  return (href) => (href.startsWith('#') && !home ? '/' + href : href)
}

// The 3D hero laptop and its 3D mouse cursor load three.js, so they run only on desktop-class devices:
// a wide window with a real mouse. Phones and tablets keep the static image and download none of the 3D code.
export const DESKTOP_3D_QUERY = '(min-width: 768px) and (hover: hover) and (pointer: fine)'
