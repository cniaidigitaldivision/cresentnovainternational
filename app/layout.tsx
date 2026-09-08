import type { Metadata } from 'next'
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

// Both families are self-hosted and preloaded by next/font. The weights are the ones
// the type scale actually asks for (400 body, 600 labels/headline-sm/md, 700 display).
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Crescent Nova International | Saudi-Pakistani Enterprise',
  description:
    "A bilateral investment platform connecting Pakistani enterprise with Saudi Arabia's Vision 2030.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // "dark" is set here rather than toggled at runtime: this page ships in the dark
    // teal/gold treatment. Removing the class returns the whole page to the light
    // Sovereign Bridge palette -- every dark rule is a `dark:` variant, nothing else.
    <html lang="en" className={`dark ${manrope.variable} ${jakarta.variable}`}>
      <head>
        <noscript>
          {/* Scroll reveals ship as opacity:0 in the SSR markup. Without JS the
              IntersectionObserver never fires, so unhide them outright. */}
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
