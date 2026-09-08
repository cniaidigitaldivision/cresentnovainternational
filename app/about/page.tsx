import type { Metadata } from 'next'
import Image from 'next/image'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { CeoVideo } from '@/components/CeoVideo'
import {
  ACCENT,
  BODY,
  BTN_CTA,
  CARD,
  CHIP,
  EYEBROW,
  GROUND,
  H2,
  HEAD,
  MUTED,
  SHELL,
} from '../theme'
import { CEO_MESSAGE, LEADERS } from '../data'
import {
  ABOUT_LEADERS,
  DIFFERENTIATORS,
  HERITAGE,
  HERITAGE_INTRO,
  MISSION,
  POSITIONING,
  VISION,
} from './data'

export const metadata: Metadata = {
  title: 'About · CNI',
  description:
    "Backed by the Attari Group's 18-year legacy with zero investor disputes, CNI is the premier bridge into Saudi Arabia's Vision 2030.",
}

// The briefed portraits (team/*.jpg) aren't in this repo, so each name reuses the
// existing CDN source already carried for that person on the home page.
const portrait = (name: string) => LEADERS.find((l) => l.name === name)!

export default function About() {
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
                  About Us
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl-mobile font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] lg:text-display-xl">
                A legacy of trust, an ambition for the{' '}
                <span className="text-primary-fixed-dim underline decoration-tertiary-fixed decoration-4 underline-offset-8">
                  Kingdom
                </span>
              </h1>

              <p className="max-w-2xl font-body-lg text-body-lg text-white/85">{POSITIONING}</p>
            </Reveal>
          </div>
        </section>

        {/* 2 — VISION */}
        <section className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className="mx-auto max-w-[1000px] px-gutter-mobile text-center lg:px-gutter-desktop">
            <Reveal className="space-y-space-md">
              <div className="mx-auto h-1 w-12 bg-tertiary" />
              <span className={EYEBROW}>Our Vision</span>
              <p
                className={`font-headline-md text-headline-md font-bold leading-snug lg:font-headline-lg lg:text-headline-lg ${HEAD}`}
              >
                {VISION}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 3 — MISSION */}
        <section className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Our Mission</span>
              <h2 className={H2}>Four commitments we hold ourselves to</h2>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
              {MISSION.map((item, i) => (
                <Reveal
                  key={item.icon}
                  delay={(i % 2) * 0.06}
                  className={`flex items-start gap-space-md rounded-2xl p-space-lg shadow-sm ${CARD}`}
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${CHIP}`}
                  >
                    <Icon name={item.icon} className="text-2xl" />
                  </div>
                  <p className={`font-body-lg text-body-lg ${BODY}`}>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — HERITAGE */}
        <section className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="mx-auto mb-space-2xl max-w-2xl space-y-space-xs text-center">
              <span className={EYEBROW}>Our Heritage</span>
              <h2 className={H2}>18 years of proven business excellence</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>{HERITAGE_INTRO}</p>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
              {HERITAGE.map((entry, i) => (
                <Reveal
                  key={entry.year}
                  delay={(i % 3) * 0.06}
                  className={`relative rounded-2xl p-space-lg shadow-sm ${CARD} ${
                    entry.current ? 'ring-1 ring-primary/20 dark:ring-tertiary/40' : ''
                  }`}
                >
                  <div
                    className={`mb-space-sm h-1 w-8 ${
                      entry.current ? 'bg-primary dark:bg-tertiary' : 'bg-tertiary-fixed'
                    }`}
                  />
                  <span className={`font-headline-sm text-headline-sm font-bold ${ACCENT}`}>
                    {entry.year}
                  </span>
                  <h3
                    className={`mb-space-2xs mt-1 font-headline-sm text-headline-sm font-bold ${HEAD}`}
                  >
                    {entry.milestone}
                  </h3>
                  <p className={`font-body-sm text-body-sm ${BODY}`}>{entry.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — CEO MESSAGE */}
        <section className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div
              className={`grid grid-cols-1 items-center gap-space-xl rounded-3xl p-space-xl shadow-sm lg:grid-cols-12 lg:p-space-2xl ${CARD}`}
            >
              <div className="lg:col-span-5">
                <CeoVideo />
              </div>

              <div className="space-y-space-sm lg:col-span-7">
                <span className={EYEBROW}>CEO Message</span>
                <h2 className={`font-headline-md text-headline-md font-bold ${HEAD}`}>
                  A message from our CEO
                </h2>
                <p className={`font-body-md text-body-md ${BODY}`}>{CEO_MESSAGE}</p>
                <div className="pt-space-xs">
                  <p className={`font-label-lg text-label-lg font-bold ${HEAD}`}>Saif ur Rehman</p>
                  <p className={`font-body-sm text-body-sm ${MUTED}`}>
                    Chief Executive Officer, CNI KSA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 — LEADERSHIP */}
        <section id="leadership" className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>From the Leadership</span>
              <h2 className={H2}>The team steering CNI</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>
                Seasoned operators with deep roots in Pakistani enterprise and the Saudi market.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-4">
              {ABOUT_LEADERS.map((leader, i) => (
                <Reveal
                  key={leader.name}
                  delay={i * 0.06}
                  className={`overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md ${CARD}`}
                >
                  <div className="relative h-64 w-full overflow-hidden bg-surface-container-high dark:bg-card-dark-from">
                    <Image
                      src={portrait(leader.name).src}
                      alt={portrait(leader.name).alt}
                      fill
                      sizes="(min-width: 1024px) 38vw, (min-width: 640px) 75vw, 145vw"
                      style={{
                        objectPosition: portrait(leader.name).objectPosition,
                        transformOrigin: portrait(leader.name).objectPosition,
                        transform: portrait(leader.name).zoom
                          ? `scale(${portrait(leader.name).zoom})`
                          : undefined,
                      }}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-space-md">
                    <h3 className={`font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                      {leader.name}
                    </h3>
                    <p className={`font-body-sm text-body-sm font-semibold ${ACCENT}`}>
                      {leader.role}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7 — WHY CNI IS DIFFERENT */}
        <section className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Why CNI Is Different</span>
              <h2 className={H2}>A competitive moat that cannot be quickly replicated</h2>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
              {DIFFERENTIATORS.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 0.06}
                  className={`flex flex-col rounded-2xl p-space-xl shadow-sm ${CARD}`}
                >
                  <div
                    className={`mb-space-md flex h-12 w-12 items-center justify-center rounded-xl ${CHIP}`}
                  >
                    <Icon name={item.icon} className="text-2xl" />
                  </div>
                  <h3 className={`mb-space-2xs font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                    {item.title}
                  </h3>
                  <p className={`font-body-sm text-body-sm ${BODY}`}>{item.claim}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8 — CLOSING CTA */}
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
