import type { Metadata } from 'next'
import Image from 'next/image'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { ACCENT, BODY, BTN, BTN_CTA, CARD, CHIP, EYEBROW, GROUND, H2, HEAD, SHELL } from '../theme'
import { DRIVERS, HERO_SUMMARY, ROADMAP, ROADMAP_INTRO } from './data'

export const metadata: Metadata = {
  title: 'Why KSA · CNI',
  description:
    'Saudi Arabia under Vision 2030: mega-projects, 100% foreign ownership, tax incentives, and Pakistan–Saudi investment agreements.',
}

export default function WhyKSA() {
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
                  Market Opportunity
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl-mobile font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] lg:text-display-xl">
                A once-in-a-generation{' '}
                <span className="text-primary-fixed-dim underline decoration-tertiary-fixed decoration-4 underline-offset-8">
                  wealth-creation moment
                </span>
              </h1>

              <p className="max-w-2xl font-body-lg text-body-lg text-white/85">{HERO_SUMMARY}</p>
            </Reveal>
          </div>
        </section>

        {/* 2 — OPPORTUNITY DRIVERS */}
        <section className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Macroeconomic Landscape</span>
              <h2 className={H2}>Four forces opening the Kingdom</h2>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
              {DRIVERS.map((item, i) => (
                <Reveal
                  key={item.driver}
                  delay={i * 0.06}
                  className={`flex flex-col rounded-2xl p-space-xl shadow-sm ${CARD}`}
                >
                  <div
                    className={`mb-space-md flex h-12 w-12 items-center justify-center rounded-xl ${CHIP}`}
                  >
                    <Icon name={item.icon} className="text-2xl" />
                  </div>
                  <h3 className={`mb-space-2xs font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                    {item.driver}
                  </h3>
                  <p className={`font-body-sm text-body-sm ${BODY}`}>{item.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3 — STRATEGIC ROADMAP */}
        <section className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mx-auto mb-space-2xl max-w-2xl space-y-space-xs text-center">
              <span className={EYEBROW}>Strategic Roadmap</span>
              <h2 className={H2}>Five phases to regional presence</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>{ROADMAP_INTRO}</p>
            </div>

            {/* The rail sits at the vertical centre of the phase badges (24px card padding
                + 20px half-badge) and is drawn behind the cards, so it only shows through
                the gaps between them. */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-[44px] hidden h-px bg-tertiary/30 lg:block"
              />

              <div className="relative grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-5">
                {ROADMAP.map((step, i) => (
                  <Reveal
                    key={step.phase}
                    delay={i * 0.06}
                    className={`flex flex-col rounded-2xl p-space-lg shadow-sm ${CARD}`}
                  >                      <div className="mb-space-sm flex items-center gap-space-xs">
                        <span
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-headline-sm text-headline-sm font-bold ${BTN}`}
                        >
                          {step.phase}
                        </span>
                        <Icon name={step.icon} className={`text-xl ${ACCENT}`} />
                      </div>
                      <span
                        className={`font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-widest text-tertiary`}
                      >
                        Phase {step.phase}
                      </span>
                      <h3
                        className={`mb-space-2xs mt-space-2xs font-headline-sm text-headline-sm font-bold ${HEAD}`}
                      >
                        {step.name}
                      </h3>
                      <p className={`font-body-sm text-body-sm ${BODY}`}>{step.scope}</p>
                  </Reveal>
                ))}
              </div>
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
