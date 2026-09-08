import type { Metadata } from 'next'
import Image from 'next/image'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { DivisionCarousel } from '@/components/DivisionCarousel'
import { ACCENT, BODY, BTN_CTA, CARD, EYEBROW, GROUND, H2, HEAD, SHELL } from '../theme'
import { DIVISIONS, HERO_SUMMARY, PHASES } from './data'

export const metadata: Metadata = {
  title: 'Divisions · CNI',
  description:
    'Seven flagship divisions across automotive, business facilitation, travel, real estate, logistics, home services, and hospitality.',
}

export default function Divisions() {
  return (
    <>
      <SiteHeader />

      <main id="top" className={`w-full pt-20 lg:pt-24 ${GROUND.surface}`}>
        {/* 1 — HERO */}
        <section className="relative flex min-h-[420px] w-full items-center overflow-hidden bg-ink lg:min-h-[500px]">
          <Image
            src="/riyadh-skyline.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/80" />

          <div className={`relative z-10 py-space-2xl lg:py-space-3xl ${SHELL}`}>
            <Reveal className="flex max-w-3xl flex-col space-y-space-md">
              <div className="inline-flex items-center gap-space-xs self-start rounded-full border border-tertiary-fixed/50 bg-tertiary-fixed/15 px-space-sm py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-tertiary-fixed" />
                <span className="font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-[0.14em] text-tertiary-fixed">
                  Business Portfolio
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl-mobile font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] lg:text-display-xl">
                Seven flagship divisions, one integrated{' '}
                <span className="text-primary-fixed-dim underline decoration-tertiary-fixed decoration-4 underline-offset-8">
                  ecosystem
                </span>
              </h1>

              <p className="max-w-2xl font-body-lg text-body-lg text-white/85">{HERO_SUMMARY}</p>
            </Reveal>
          </div>
        </section>

        {/* 2 — DIVISION CAROUSEL */}
        <section id="portfolio" className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Explore the Portfolio</span>
              <h2 className={H2}>Every division, in detail</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>
                Step through all seven divisions — phase status, economics, and what each one
                contributes to the platform.
              </p>
            </div>

            <DivisionCarousel divisions={DIVISIONS} />
          </div>
        </section>

        {/* 3 — PHASE SUMMARY */}
        <section className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Rollout Sequence</span>
              <h2 className={H2}>Phased by readiness, not ambition</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>
                Three divisions are already generating revenue. The rest follow as the platform
                scales.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-3">
              {PHASES.map((group, i) => (
                <Reveal
                  key={group.phase}
                  delay={i * 0.06}
                  className={`flex flex-col rounded-2xl p-space-xl shadow-sm ${CARD} ${
                    group.live ? 'ring-1 ring-primary/20 dark:ring-tertiary/40' : ''
                  }`}
                >
                  <div className="mb-space-md flex items-center gap-space-xs">
                    {group.live && (
                      <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                    )}
                    <span className={`font-headline-sm text-headline-sm font-bold ${ACCENT}`}>
                      {group.phase}
                    </span>
                  </div>
                  <ul className={`space-y-space-xs ${BODY}`}>
                    {group.divisions.map((name) => (
                      <li key={name} className="flex items-start gap-space-xs font-body-md text-body-md">
                        <Icon
                          name={group.live ? 'check_circle' : 'schedule'}
                          className={`mt-0.5 text-base ${ACCENT}`}
                        />
                        <span className={group.live ? HEAD : ''}>{name}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — CLOSING CTA */}
        <section
          id="contact-advisory"
          className="relative w-full overflow-hidden bg-ink py-space-3xl text-on-primary dark:border-t dark:border-tertiary/15"
        >
          <div className={`relative z-10 ${SHELL}`}>
            <div className="mx-auto max-w-3xl space-y-space-md text-center">
              <span className="font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-[0.14em] text-tertiary-fixed">
                Initiate Bilateral Engagement
              </span>
              <h2 className="font-display-xl text-display-xl-mobile font-bold leading-tight tracking-tight lg:text-display-xl">
                Your gateway to Saudi Arabia starts here
              </h2>
              <p className="mx-auto max-w-xl font-body-lg text-body-lg text-surface-container-highest">
                Speak with our bilingual Business Facilitation team and receive a personalized
                investment proposal.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
                <a
                  href="mailto:invest@crescentnovainternational.com"
                  className={`flex items-center gap-space-xs rounded-xl px-space-xl py-3.5 font-label-lg text-label-lg font-bold shadow-lg ${BTN_CTA}`}
                >
                  <span>Request a Proposal</span>
                  <Icon name="description" className="text-lg" />
                </a>
                <a
                  href="https://wa.me/966593209505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-space-xs rounded-xl bg-surface-container-highest/20 px-space-xl py-3.5 font-label-lg text-label-lg font-bold text-on-primary transition-colors hover:bg-surface-container-highest/30"
                >
                  <Icon name="chat" className="text-lg" />
                  <span>WhatsApp us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
