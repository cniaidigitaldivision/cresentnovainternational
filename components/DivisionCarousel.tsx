'use client'

import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import { BTN_CTA, MUTED } from '@/app/theme'
import type { Division } from '@/app/divisions/data'

const UNSELECTED =
  'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high dark:border dark:border-tertiary/25 dark:bg-transparent dark:text-tertiary dark:hover:bg-tertiary/10'

// The slide sits on a photograph in both themes, so its copy uses fixed light colours
// rather than the theme's on-surface tokens -- those would go dark in the light theme
// and vanish into the image.
const ON_IMAGE = 'text-white'
const ON_IMAGE_SOFT = 'text-white/80'

function PhaseBadge({ phase, live }: { phase: string; live: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-space-2xs rounded-full px-space-sm py-1 font-label-md text-label-md font-bold backdrop-blur-sm ${
        live ? 'bg-tertiary/25 text-tertiary-fixed' : 'bg-white/15 text-white/80'
      }`}
    >
      {live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />}
      {phase}
    </span>
  )
}

export function DivisionCarousel({ divisions }: { divisions: Division[] }) {
  const reduced = useReducedMotion()
  // One index drives the tabs, the panel and the dots. The mockup's carousel swapped
  // slides by hand; here every visible piece is derived from this single value.
  const [index, setIndex] = useState(0)
  // +1 when moving forward, -1 back, so the slide animates in from the right direction.
  const [direction, setDirection] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)

  const go = useCallback(
    (next: number) => {
      const wrapped = (next + divisions.length) % divisions.length
      setDirection(next > index ? 1 : -1)
      setIndex(wrapped)
    },
    [index, divisions.length]
  )

  // Deep link: /divisions#<slug> opens that slide. The home page's "Enquire about this
  // division" links use this. Reading location happens in an effect so the server render
  // stays identical to the client's first paint -- no hydration mismatch.
  useEffect(() => {
    const openFromHash = () => {
      const slug = window.location.hash.replace(/^#/, '')
      if (!slug) return
      const target = divisions.findIndex((d) => d.slug === slug)
      if (target < 0) return
      setDirection(1)
      setIndex(target)
      // Nothing on the page carries this id, so the browser will not scroll for us.
      panelRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [divisions])

  // Arrow keys page the carousel while it has focus.
  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(index + 1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(index - 1)
      }
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [go, index])

  const active = divisions[index]

  const slide = reduced
    ? { initial: false as const, animate: {}, exit: {} }
    : {
        initial: { opacity: 0, x: direction >= 0 ? 40 : -40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction >= 0 ? -40 : 40 },
      }

  return (
    <div>
      {/* Tab strip — direct access to any slide */}
      <div className="mb-space-lg flex flex-wrap gap-space-xs" role="tablist" aria-label="Divisions">
        {divisions.map((d, i) => (
          <button
            key={d.slug}
            role="tab"
            id={`tab-${d.slug}`}
            aria-selected={i === index}
            aria-controls={`panel-${d.slug}`}
            onClick={() => go(i)}
            className={`rounded-xl px-space-sm py-2 font-label-md text-label-md font-bold transition-all ${
              i === index ? `shadow-sm ${BTN_CTA}` : UNSELECTED
            }`}
          >
            <span className="opacity-60">{d.n}</span>{' '}
            <span className="hidden sm:inline">{d.name}</span>
          </button>
        ))}
      </div>

      <div
        ref={panelRef}
        tabIndex={0}
        role="tabpanel"
        id={`panel-${active.slug}`}
        aria-labelledby={`tab-${active.slug}`}
        className="relative min-h-[560px] overflow-hidden rounded-3xl bg-ink shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary sm:min-h-[480px] lg:min-h-[440px]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.slug}
            initial={slide.initial}
            animate={slide.animate}
            exit={slide.exit}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={active.image}
              alt=""
              aria-hidden="true"
              fill
              priority={index === 0}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
            {/* Scrim: near-opaque behind the copy, clearing toward the right so the
                photograph still reads. Stacks vertically on small screens where the
                copy spans the full width. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/50 lg:bg-gradient-to-r lg:from-ink lg:via-ink/85 lg:to-ink/20"
            />

            <div className="relative flex h-full flex-col justify-center p-space-xl lg:max-w-2xl lg:p-space-2xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-tertiary-fixed backdrop-blur-sm">
                  <Icon name={active.icon} className="text-xl" />
                </span>
                <PhaseBadge phase={active.phase} live={active.live} />
                {active.isApp && (
                  <span className="inline-flex items-center gap-space-2xs rounded-full bg-white/15 px-space-sm py-1 font-label-md text-label-md font-bold text-white/80 backdrop-blur-sm">
                    <Icon name="smartphone" className="text-sm" />
                    App
                  </span>
                )}
              </div>

              <h3
                className={`mt-space-md font-headline-md text-headline-md font-bold ${ON_IMAGE}`}
              >
                {active.name}
              </h3>
              <p className="mt-space-2xs font-body-lg text-body-lg font-semibold text-tertiary-fixed">
                {active.tagline}
              </p>
              <p className={`mt-space-sm font-body-md text-body-md ${ON_IMAGE_SOFT}`}>
                {active.description}
              </p>

              <ul className="mt-space-md grid grid-cols-1 gap-space-xs sm:grid-cols-2">
                {active.highlights.map((h) => (
                  <li
                    key={h}
                    className={`flex items-start gap-space-xs font-body-sm text-body-sm ${ON_IMAGE_SOFT}`}
                  >
                    <Icon name="check_circle" className="mt-0.5 text-base text-tertiary-fixed" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-space-lg">
                <a
                  href="#contact-advisory"
                  className={`inline-flex items-center gap-space-xs rounded-xl px-space-lg py-3 font-label-lg text-label-lg font-bold shadow-md ${BTN_CTA}`}
                >
                  <span>Enquire about this division</span>
                  <Icon name="arrow_forward" className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / dots / next */}
      <div className="mt-space-lg flex items-center justify-between gap-space-md">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous division"
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-all ${UNSELECTED}`}
        >
          <Icon name="arrow_back" className="text-xl" />
        </button>

        <div className="flex items-center gap-space-2xs">
          {divisions.map((d, i) => (
            <button
              key={d.slug}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to ${d.name}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-tertiary' : 'w-2 bg-outline/40 dark:bg-tertiary/30'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-space-sm">
          <span className={`font-label-md text-label-md tabular-nums ${MUTED}`}>
            {active.n} / {divisions.length.toString().padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next division"
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-all ${UNSELECTED}`}
          >
            <Icon name="arrow_forward" className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  )
}
