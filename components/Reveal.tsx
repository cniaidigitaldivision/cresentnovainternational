'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Scroll-in reveal. Animates opacity/transform only, never className, so it can't
 * race the Tailwind classes the element already carries.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section'
}) {
  const reduced = useReducedMotion()
  const Tag = as === 'section' ? motion.section : motion.div

  return (
    <Tag
      // data-reveal lets the <noscript> rule in the root layout force these visible;
      // framer-motion serialises `initial` into the SSR HTML, so without that escape
      // hatch a no-JS client would see empty cards.
      data-reveal=""
      className={className}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
