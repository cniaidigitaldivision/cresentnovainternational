'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Icon } from './Icon'
import { BTN_CTA } from '@/app/theme'

// About is a real route; the rest are anchors on the home page. They are written
// root-relative ("/#...") rather than bare ("#...") so they still work from /about --
// a bare hash there would look for a section that page doesn't have.
const NAV = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'leadership', label: 'Leadership', href: '/about#leadership' },
  { id: 'investors', label: 'Investors', href: '/investors' },
  { id: 'divisions', label: 'Divisions', href: '/divisions' },
  { id: 'why-ksa', label: 'Why KSA', href: '/why-ksa' },
  { id: 'contact', label: 'Contact', href: '/contact' },
]

const LOCALES = ['EN', 'عربية'] as const

/**
 * Every interactive element in the header turns gold (#d4b98c = `tertiary`) on hover.
 *
 * The dark half has to be spelled out. Tailwind emits `dark:text-*` AFTER `hover:text-*`
 * and both resolve to specificity (0,2,0) -- `.hover\:text-tertiary:hover` vs
 * `.dark\:text-tertiary:is(.dark *)` -- so on a `dark:`-coloured element a bare
 * `hover:text-tertiary` loses on source order and silently does nothing. The compound
 * `dark:hover:` variant is (0,3,0) and wins.
 */
const HOVER_GOLD = 'transition-colors hover:text-tertiary dark:hover:text-tertiary'

/**
 * The filled CTA is the exception to HOVER_GOLD: the gold lands on its fill rather than
 * its label, so it uses the shared brand-CTA recipe instead.
 */
const CTA = `hidden items-center justify-center rounded-xl px-space-md py-space-xs font-label-lg text-label-lg shadow-[0_4px_20px_-2px_rgba(18,63,66,0.12)] md:inline-flex ${BTN_CTA}`

export function SiteHeader() {
  // The mockup drove both of these by rewriting className on click. As state, the
  // markup is derived on render, so nothing can drift out of sync with React.
  const pathname = usePathname()
  const [clicked, setClicked] = useState<string | null>(null)
  const [locale, setLocale] = useState<(typeof LOCALES)[number]>('EN')
  const [menuOpen, setMenuOpen] = useState(false)

  // A real route decides the highlight on its own; the in-page anchors can only rely on
  // what was last clicked. Route wins so /about stays lit no matter what was clicked
  // before navigating.
  const routeActive = NAV.find((item) => item.href === pathname)?.id ?? null
  const active = routeActive ?? clicked
  const setActive = (id: string) => setClicked(id)

  const navLink = (id: string) =>
    `font-label-lg text-label-lg ${HOVER_GOLD} ${
      active === id
        ? 'font-bold text-primary dark:text-primary-fixed-dim'
        : 'text-on-surface-variant dark:text-white/75'
    }`

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:bg-ink/90 dark:shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-space-md px-gutter-mobile lg:h-24 lg:px-gutter-desktop">
        <Link href="/" className="flex items-center gap-space-xs" onClick={() => setClicked(null)}>
          {/* The artwork is square (1600x1600) and its own three-tier lockup, so the
              declared ratio has to be 1:1 -- the previous 220x80 letterboxed it inside a
              wide box and object-contain shrank it to 56px with dead space either side. */}
          <Image
            src="/logo.png"
            alt="Crescent Nova International"
            width={160}
            height={160}
            priority
            className="h-16 w-auto object-contain lg:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-space-lg lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? 'page' : undefined}
              onClick={() => setActive(item.id)}
              className={navLink(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <div
            className="hidden items-center rounded-xl bg-surface-container-low px-space-xs py-space-2xs font-label-md text-label-md dark:bg-white/10 sm:flex"
            role="group"
            aria-label="Language"
          >
            {LOCALES.map((code, i) => (
              <span key={code} className="flex items-center">
                {i > 0 && <span className="mx-space-2xs text-outline">/</span>}
                <button
                  type="button"
                  onClick={() => setLocale(code)}
                  aria-pressed={locale === code}
                  className={`${HOVER_GOLD} ${
                    locale === code
                      ? 'font-semibold text-primary dark:text-primary-fixed-dim'
                      : 'text-on-surface-variant dark:text-white/75'
                  }`}
                >
                  {code}
                </button>
              </span>
            ))}
          </div>

          <Link href="/contact" onClick={() => setActive('contact')} className={CTA}>
            Request a Proposal
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className={`flex h-10 w-10 items-center justify-center rounded-xl text-on-surface-variant hover:bg-surface-container-low dark:text-white/80 dark:hover:bg-white/10 lg:hidden ${HOVER_GOLD}`}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-2xl" label="Toggle navigation" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-outline-variant/40 bg-surface px-gutter-mobile pb-space-md pt-space-xs dark:border-tertiary/20 dark:bg-ink lg:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? 'page' : undefined}
              onClick={() => {
                setActive(item.id)
                setMenuOpen(false)
              }}
              className={`block py-space-xs ${navLink(item.id)}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
