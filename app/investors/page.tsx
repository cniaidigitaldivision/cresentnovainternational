import type { Metadata } from 'next'
import Image from 'next/image'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { ReturnsCalculator } from '@/components/ReturnsCalculator'
import {
  ACCENT,
  BODY,
  BTN,
  BTN_CTA,
  BTN_SOFT,
  CARD,
  CHIP,
  EYEBROW,
  GROUND,
  H2,
  HEAD,
  MUTED,
  SHELL,
} from '../theme'
import {
  EXITS,
  FAQS,
  GOVERNANCE,
  HERO_SUMMARY,
  LEGAL_DISCLAIMER,
  METRICS,
  METRICS_QUALIFIER,
  STEPS,
  TIERS,
} from './data'

export const metadata: Metadata = {
  title: 'Investors · CNI',
  description:
    'Structured investment tiers, transparent ROI, JV structure, governance, and multiple exit pathways — all under Saudi and Pakistani legal protection.',
}

export default function Investors() {
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
                  Investment Opportunity
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl-mobile font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] lg:text-display-xl">
                Partner in Saudi Arabia&apos;s Vision 2030 — with{' '}
                <span className="text-primary-fixed-dim underline decoration-tertiary-fixed decoration-4 underline-offset-8">
                  measurable returns
                </span>
              </h1>

              <p className="max-w-2xl font-body-lg text-body-lg text-white/85">{HERO_SUMMARY}</p>
            </Reveal>
          </div>
        </section>

        {/* 2 — HEADLINE METRICS */}
        <section className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="grid grid-cols-2 gap-space-md lg:grid-cols-4 lg:gap-space-xl">
              {METRICS.map((m, i) => (
                <Reveal
                  key={m.figure}
                  delay={i * 0.06}
                  className={`rounded-2xl p-space-lg shadow-sm ${CARD}`}
                >
                  <div className="mb-space-sm h-1 w-8 bg-tertiary-fixed" />
                  <p
                    className={`font-display-xl text-display-xl-mobile font-bold tracking-tight ${ACCENT}`}
                  >
                    {m.figure}
                  </p>
                  <p className={`mt-space-2xs font-body-sm text-body-sm ${BODY}`}>{m.meaning}</p>
                </Reveal>
              ))}
            </div>

            <p className={`mt-space-lg max-w-3xl font-body-sm text-body-sm ${MUTED}`}>
              {METRICS_QUALIFIER}
            </p>
          </div>
        </section>

        {/* 3 — INVESTMENT TIERS */}
        <section id="investment-tiers" className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mx-auto mb-space-2xl max-w-2xl space-y-space-xs text-center">
              <span className={EYEBROW}>Structured Participation</span>
              <h2 className={H2}>Three tiers. Scalable returns.</h2>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-space-lg lg:grid-cols-3">
              {TIERS.map((tier, i) => (
                <Reveal
                  key={tier.id}
                  delay={i * 0.08}
                  className={`relative flex flex-col justify-between rounded-3xl p-space-xl ${CARD} ${
                    tier.featured
                      ? 'shadow-2xl ring-2 ring-tertiary-fixed lg:-translate-y-2'
                      : 'shadow-sm transition-all hover:shadow-xl'
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-tertiary px-space-md py-1 font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-widest text-on-tertiary shadow-md dark:text-ink">
                      Most popular
                    </div>
                  )}

                  <div className="space-y-space-md">
                    <h3 className={`font-headline-md text-headline-md font-bold ${HEAD}`}>
                      {tier.name}
                    </h3>

                    <div className="space-y-1 border-y border-surface-container-highest py-space-md dark:border-tertiary/20">
                      <span className={`font-display-xl text-display-xl-mobile font-bold ${ACCENT}`}>
                        {tier.roi}
                      </span>
                      <span className={`block font-label-md text-label-md ${BODY}`}>
                        Target ROI p.a. · {tier.horizon}
                      </span>
                      <p className={`pt-space-xs font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                        {tier.ticket}
                      </p>
                    </div>

                    <p className={`font-body-md text-body-md ${BODY}`}>{tier.positioning}</p>
                  </div>

                  <div className="pt-space-xl">
                    <a
                      href="#contact-advisory"
                      className={`flex w-full items-center justify-center rounded-xl py-3 font-label-lg text-label-lg font-bold transition-all ${
                        tier.featured ? `shadow-lg ${BTN}` : BTN_SOFT
                      }`}
                    >
                      Get started
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — RETURNS CALCULATOR */}
        <section className={`w-full py-space-3xl ${GROUND.lowest}`}>
          <div className={SHELL}>
            <div
              className={`rounded-3xl p-space-xl shadow-md lg:p-space-2xl ${GROUND.container} dark:border dark:border-tertiary/20`}
            >
              <div className="mb-space-xl max-w-xl">
                <span className={EYEBROW}>Interactive Projection Tool</span>
                <h2 className={`${H2} mt-space-2xs`}>Model your projected returns</h2>
              </div>
              <ReturnsCalculator />
            </div>
          </div>
        </section>

        {/* 5 — HOW IT WORKS */}
        <section className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="mx-auto mb-space-2xl max-w-2xl space-y-space-xs text-center">
              <span className={EYEBROW}>Streamlined Onboarding</span>
              <h2 className={H2}>How It Works</h2>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <Reveal
                  key={step.n}
                  delay={i * 0.06}
                  className={`rounded-2xl p-space-lg shadow-sm ${CARD}`}
                >
                  <div
                    className={`mb-space-sm flex h-10 w-10 items-center justify-center rounded-full font-headline-sm text-headline-sm font-bold ${BTN}`}
                  >
                    {step.n}
                  </div>
                  <h3 className={`mb-space-2xs font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                    {step.title}
                  </h3>
                  <p className={`font-body-sm text-body-sm ${BODY}`}>{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — GOVERNANCE & SECURITY */}
        <section className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Governance &amp; Security</span>
              <h2 className={H2}>Your capital is protected at every layer</h2>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
              {GOVERNANCE.map((item, i) => (
                <Reveal
                  key={item.layer}
                  delay={(i % 2) * 0.06}
                  className={`flex items-start gap-space-md rounded-2xl p-space-lg shadow-sm ${CARD}`}
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${CHIP}`}
                  >
                    <Icon name={item.icon} className="text-2xl" />
                  </div>
                  <div>
                    <h3 className={`mb-1 font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                      {item.layer}
                    </h3>
                    <p className={`font-body-sm text-body-sm ${BODY}`}>{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7 — EXIT STRATEGY */}
        <section className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Exit Strategy</span>
              <h2 className={H2}>Multiple pathways to realize value</h2>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
              {EXITS.map((exit, i) => (
                <Reveal
                  key={exit.pathway}
                  delay={i * 0.06}
                  className={`flex flex-col rounded-2xl p-space-xl shadow-sm ${CARD}`}
                >
                  <div
                    className={`mb-space-md flex h-12 w-12 items-center justify-center rounded-xl ${CHIP}`}
                  >
                    <Icon name={exit.icon} className="text-2xl" />
                  </div>
                  <h3 className={`font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                    {exit.pathway}
                  </h3>
                  <span
                    className={`mt-space-2xs w-fit rounded-full bg-surface-container-high px-space-sm py-1 font-label-md text-label-md font-bold text-on-surface-variant dark:bg-white/5 dark:text-tertiary/70`}
                  >
                    {exit.timing}
                  </span>
                  <p className={`mt-space-sm font-body-sm text-body-sm ${BODY}`}>{exit.valuation}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8 — FAQ */}
        <section className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className="mx-auto max-w-[960px] px-gutter-mobile lg:px-gutter-desktop">
            <div className="mb-space-2xl space-y-space-xs text-center">
              <span className={EYEBROW}>Clear Governance</span>
              <h2 className={H2}>Investor questions, answered</h2>
            </div>

            <div className="space-y-space-sm">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className={`group rounded-2xl p-space-lg shadow-sm transition-all open:shadow-md ${CARD}`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-space-md">
                    <span className={`font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                      {faq.q}
                    </span>
                    <Icon
                      name="expand_more"
                      className={`flex-shrink-0 text-2xl transition-transform group-open:rotate-180 ${ACCENT}`}
                    />
                  </summary>
                  <div className={`pt-space-md font-body-md text-body-md leading-relaxed ${BODY}`}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9 — CLOSING CTA */}
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

        {/* 10 — LEGAL DISCLAIMER */}
        <section className={`w-full py-space-xl ${GROUND.container}`}>
          <div className={SHELL}>
            <p className={`mx-auto max-w-4xl text-center font-label-md text-label-md ${MUTED}`}>
              {LEGAL_DISCLAIMER}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
