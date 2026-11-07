import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

// Subtle fade-up on scroll, once. Respects reduced-motion settings.
// LazyMotion keeps the Framer Motion bundle small.
export default function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
