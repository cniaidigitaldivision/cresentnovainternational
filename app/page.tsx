import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { ReturnsCalculator } from '@/components/ReturnsCalculator'
import { DossierForm } from '@/components/DossierForm'
import { CeoVideo } from '@/components/CeoVideo'
import { CARD, EYEBROW, GROUND, H2, ACCENT, BODY, BTN, BTN_CTA, BTN_SOFT, CHIP, HEAD, MUTED, SHELL } from './theme'
import {
  CEO_MESSAGE,
  COMPLIANCE,
  DIVISIONS,
  FAQS,
  KEY_STATS,
  LEADERS,
  MARKET,
  STEPS,
  TIERS,
  TIMELINE,
  TRUST,
} from './data'

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className={`w-full pt-20 lg:pt-24 ${GROUND.surface}`}>
        {/* 1 — HERO (already ink-grounded in both themes) */}
        <section className="relative flex min-h-[640px] w-full items-center overflow-hidden bg-ink lg:min-h-[88vh]">
          <Image
            src="/riyadh-skyline.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/75" />

          <div className={`relative z-10 py-space-2xl lg:py-space-3xl ${SHELL}`}>
            <Reveal className="flex max-w-3xl flex-col space-y-space-md">
              <div className="inline-flex items-center gap-space-xs self-start rounded-full border border-tertiary-fixed/50 bg-tertiary-fixed/15 px-space-sm py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary-fixed" />
                <span className="font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-[0.14em] text-tertiary-fixed">
                  Aligned with Saudi Arabia&apos;s Vision 2030
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl-mobile font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] lg:text-display-xl">
                The Premier Bridge Between Pakistani Enterprise and Saudi Arabia&apos;s{' '}
                <span className="text-primary-fixed-dim underline decoration-tertiary-fixed decoration-4 underline-offset-8">
                  Vision 2030
                </span>
              </h1>

              <p className="max-w-xl font-body-lg text-body-lg text-white/85">
                Backed by the Attari Group&apos;s 18-year legacy, Crescent Nova International is a
                Saudi-registered, multi-sector investment platform connecting Pakistani investors,
                enterprises, and travelers with KSA&apos;s fastest-growing opportunities.
              </p>

              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a
                  href="#investment-tiers"
                  className={`group flex items-center gap-space-xs rounded-xl px-space-xl py-3.5 font-label-lg text-label-lg font-bold shadow-[0_8px_28px_-4px_rgba(0,0,0,0.5)] ${BTN_CTA}`}
                >
                  <span>Explore Investment Tiers</span>
                  <Icon
                    name="arrow_forward"
                    className="text-lg transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#portfolio"
                  className="flex items-center gap-space-2xs rounded-xl border border-white/25 bg-white/10 px-space-lg py-3.5 font-label-lg text-label-lg font-semibold text-white backdrop-blur-md transition-colors hover:bg-tertiary hover:text-on-tertiary-fixed dark:border-tertiary/25"
                >
                  <span>View Our Divisions</span>
                  <Icon name="expand_more" className="text-lg" />
                </a>
              </div>

              <div className="mt-space-md rounded-2xl border border-white/20 bg-white/10 p-space-md shadow-lg backdrop-blur-xl dark:border-tertiary/20">
                <div className="flex flex-wrap items-center gap-x-space-sm gap-y-2 font-label-md text-label-md font-medium text-white/80">
                  <span className="font-bold text-primary-fixed-dim">15–22% projected annual ROI</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed" />
                  <span>From SAR 500,000</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed" />
                  <span className="flex items-center gap-1">
                    <Icon name="verified_user" className="text-xs text-primary-fixed-dim" />
                    Sharia-aligned &amp; escrow-protected
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed" />
                  <span className="font-bold text-tertiary-fixed">Backed by Attari Group</span>
                </div>
              </div>
            </Reveal>

            <div className="mt-space-xl flex w-full items-center justify-between gap-space-md rounded-2xl border border-white/20 bg-white/10 p-space-md shadow-2xl backdrop-blur-xl dark:border-tertiary/20 lg:absolute lg:bottom-space-2xl lg:right-gutter-desktop lg:mt-0 lg:w-auto lg:max-w-sm">
              <div className="flex items-center gap-space-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-primary-fixed-dim">
                  <Icon name="assured_workload" className="text-2xl" />
                </div>
                <div>
                  <p className="font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-wider text-tertiary-fixed">
                    Bilateral Status
                  </p>
                  <p className="font-headline-sm text-headline-sm font-bold text-white">
                    Saudi LLC Registered
                  </p>
                </div>
              </div>
              <span className="whitespace-nowrap rounded-full bg-white/15 px-space-xs py-1 font-label-md text-label-md font-semibold text-white">
                Riyadh HQ
              </span>
            </div>
          </div>
        </section>

        {/* 2 — KEY STATISTICS */}
        <section className={`w-full py-space-xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="grid grid-cols-2 gap-space-md lg:grid-cols-4 lg:gap-space-xl">
              {KEY_STATS.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 0.06}
                  className={`group relative overflow-hidden rounded-2xl p-space-lg shadow-sm transition-all hover:shadow-md ${CARD}`}
                >
                  <div className="mb-space-sm h-1 w-8 bg-tertiary-fixed" />
                  <p
                    className={`font-display-xl text-display-xl-mobile font-bold tracking-tight lg:text-display-xl ${ACCENT}`}
                  >
                    {stat.value}
                  </p>
                  <p className={`mt-1 font-label-lg text-label-lg font-bold ${HEAD}`}>{stat.label}</p>
                  <p className={`font-body-sm text-body-sm ${BODY}`}>{stat.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3 — COMPLIANCE STRIP */}
        <section
          className={`w-full py-space-md shadow-[0_1px_4px_rgba(0,0,0,0.03)] ${GROUND.lowest} dark:border-y dark:border-tertiary/15`}
        >
          <div className={SHELL}>
            <div className="flex flex-wrap items-center justify-between gap-space-md">
              {COMPLIANCE.map((item) => (
                <div key={item.label} className={`flex items-center gap-space-xs ${HEAD}`}>
                  <Icon name={item.icon} className={`text-xl ${ACCENT}`} />
                  <span className="font-label-lg text-label-lg font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — BUSINESS PORTFOLIO */}
        <section id="portfolio" className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
              <div className="max-w-2xl space-y-space-xs">
                <span className={EYEBROW}>Ecosystem Architecture</span>
                <h2 className={H2}>Eight flagship divisions, one powerful platform</h2>
                <p className={`font-body-md text-body-md ${BODY}`}>
                  Each division operates as an independent revenue stream while contributing to a
                  unified ecosystem aligned directly with Vision 2030.
                </p>
              </div>
              <a
                href="#investment-tiers"
                className={`inline-flex items-center gap-space-xs font-label-lg text-label-lg font-bold transition-colors hover:text-primary-container ${ACCENT}`}
              >
                <span>Investment Distribution Details</span>
                <Icon name="trending_up" className="text-lg" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
              {DIVISIONS.map((division, i) => (
                <Reveal
                  key={division.n}
                  delay={(i % 3) * 0.06}
                  className="group relative isolate flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl bg-ink p-space-xl shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  {/* Division photo as the card ground, matching the /divisions slides. */}
                  <Image
                    src={division.image}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Scrim: the copy runs the full height of the card, so this stays heavy
                      throughout and only lifts near the top where the photo can read. */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/[0.92] to-ink/60"
                  />

                  <div>
                    <div className="mb-space-md flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm font-bold text-tertiary-fixed">
                        {division.n}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-tertiary-fixed backdrop-blur-sm transition-colors group-hover:bg-tertiary group-hover:text-ink">
                        <Icon name={division.icon} className="text-xl" />
                      </div>
                    </div>
                    <h3 className="mb-space-2xs font-headline-sm text-headline-sm font-bold text-white">
                      {division.title}
                    </h3>
                    <p className="mb-space-md font-body-md text-body-md text-white/80">
                      {division.body}
                    </p>
                  </div>
                  {/* Deep-links into the /divisions carousel; the hash selects the slide. */}
                  <Link
                    href={`/divisions#${division.slug}`}
                    className="inline-flex items-center gap-space-xs pt-space-xs font-label-lg text-label-lg font-bold text-tertiary-fixed transition-colors group-hover:text-white"
                  >
                    <span>Enquire about this division</span>
                    <Icon
                      name="arrow_forward"
                      className="text-base transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — RETURNS CALCULATOR */}
        <section className={`w-full py-space-3xl ${GROUND.lowest}`}>
          <div className={SHELL}>
            <div
              className={`rounded-3xl p-space-xl shadow-md lg:p-space-2xl ${GROUND.container} dark:border dark:border-tertiary/20`}
            >
              <div className="mb-space-xl max-w-xl">
                <span className={EYEBROW}>Interactive Projection Tool</span>
                <h2 className={`${H2} mt-space-2xs`}>Model your projected returns</h2>
                <p className={`mt-space-xs font-body-md text-body-md ${BODY}`}>
                  Select an institutional tier and evaluate projected capital expansion supported by
                  audited revenue distribution cycles.
                </p>
              </div>
              <ReturnsCalculator />
            </div>
          </div>
        </section>

        {/* 6 — INVESTMENT TIERS */}
        <section id="investment-tiers" className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mx-auto mb-space-2xl max-w-3xl space-y-space-xs text-center">
              <span className={EYEBROW}>Structured Participation</span>
              <h2 className={H2}>Three tiers. Scalable returns. Maximum protection.</h2>
              <p className={`font-body-lg text-body-lg ${BODY}`}>
                All backed by Saudi Investment Law, the Pakistan—Saudi BIT, escrow accounts, and
                quarterly audits.
              </p>
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
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-space-md">
                    <div>
                      <span
                        className={`font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-widest ${tier.eyebrowClass}`}
                      >
                        {tier.eyebrow}
                      </span>
                      <h3 className={`font-headline-md text-headline-md font-bold ${HEAD}`}>
                        {tier.name}
                      </h3>
                      <p className={`mt-1 font-body-sm text-body-sm ${BODY}`}>{tier.blurb}</p>
                    </div>

                    <div className="space-y-1 border-y border-surface-container-highest py-space-md dark:border-tertiary/20">
                      <span className={`font-display-xl text-display-xl-mobile font-bold ${ACCENT}`}>
                        {tier.roi}
                      </span>
                      <span className={`block font-label-md text-label-md ${BODY}`}>
                        {tier.horizon}
                      </span>
                      <p className={`pt-space-xs font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                        {tier.range}
                      </p>
                    </div>

                    <ul className={`space-y-space-xs font-body-sm text-body-sm ${BODY}`}>
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-space-xs">
                          <Icon name="check_circle" className={`mt-0.5 text-base ${ACCENT}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-space-xl">
                    <a
                      href="#contact-advisory"
                      className={`flex w-full items-center justify-center rounded-xl py-3 font-label-lg text-label-lg font-bold transition-all ${
                        tier.featured ? `shadow-lg ${BTN}` : BTN_SOFT
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7 — HOW IT WORKS */}
        <section className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="mx-auto mb-space-2xl max-w-2xl space-y-space-xs text-center">
              <span className={EYEBROW}>Streamlined Onboarding</span>
              <h2 className={H2}>How It Works</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>
                A compliant four-step pathway from initial mandate review to quarterly audited yield
                generation.
              </p>
            </div>

            <div className="relative grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <Reveal
                  key={step.n}
                  delay={i * 0.06}
                  className={`relative z-10 flex flex-col justify-between rounded-2xl p-space-lg shadow-sm ${CARD}`}
                >
                  <div className="space-y-space-sm">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-headline-sm text-headline-sm font-bold ${BTN}`}
                    >
                      {step.n}
                    </div>
                    <h3 className={`font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                      {step.title}
                    </h3>
                    <p className={`font-body-sm text-body-sm ${BODY}`}>{step.body}</p>
                  </div>
                  <span className="mt-space-md block font-label-eyebrow text-label-eyebrow font-bold text-tertiary">
                    {step.phase}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8 — TRUST & SECURITY */}
        <section className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Fiduciary Governance</span>
              <h2 className={H2}>Institutional Trust &amp; Cross-Border Security</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>
                Your capital is defended by bilateral treaties, tier-1 Saudi custodians, and rigorous
                external auditing.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
              {TRUST.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={(i % 3) * 0.06}
                  className={`flex items-start gap-space-md rounded-2xl p-space-lg shadow-sm ${CARD}`}
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${CHIP}`}
                  >
                    <Icon name={item.icon} className="text-2xl" />
                  </div>
                  <div>
                    <h3 className={`mb-1 font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                      {item.title}
                    </h3>
                    <p className={`font-body-sm text-body-sm ${BODY}`}>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 9 — COMMITMENT QUOTE */}
        <section className={`w-full py-space-3xl ${GROUND.container}`}>
          <div className="mx-auto max-w-[1000px] space-y-space-md px-gutter-mobile text-center lg:px-gutter-desktop">
            <div className="mx-auto h-1 w-12 bg-tertiary" />
            <blockquote
              className={`font-headline-md text-headline-md font-bold italic leading-snug lg:font-headline-lg lg:text-headline-lg ${HEAD}`}
            >
              &ldquo;Over eighteen years across Pakistan and the Gulf, we have measured our success
              not merely in capital returns, but in zero investor disputes and unwavering fiduciary
              stewardship.&rdquo;
            </blockquote>
            <div className="space-y-1">
              <p className={`font-label-lg text-label-lg font-bold ${ACCENT}`}>Executive Committee</p>
              <p className={`font-body-sm text-body-sm ${BODY}`}>
                Attari Group of Companies &amp; Crescent Nova International
              </p>
            </div>
          </div>
        </section>

        {/* 10 — MARKET OPPORTUNITY */}
        <section id="why-ksa" className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Macroeconomic Landscape</span>
              <h2 className={H2}>Why the Kingdom Now?</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>
                Saudi Arabia represents the world&apos;s most dynamic sovereign investment pipeline
                over the next decade.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
              {MARKET.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 0.06}
                  className={`flex flex-col justify-between rounded-2xl p-space-xl shadow-sm ${CARD}`}
                >
                  <div>
                    <span className="font-headline-lg text-headline-lg font-bold text-tertiary">
                      {item.value}
                    </span>
                    <h3 className={`mb-1 mt-2 font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                      {item.title}
                    </h3>
                    <p className={`font-body-sm text-body-sm ${BODY}`}>{item.body}</p>
                  </div>
                  <span
                    className={`mt-space-md font-label-eyebrow text-label-eyebrow font-bold uppercase ${MUTED}`}
                  >
                    {item.tag}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 11 — LEADERSHIP & CEO BANNER */}
        <section id="leadership" className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="mb-space-2xl max-w-2xl space-y-space-xs">
              <span className={EYEBROW}>Executive Governance</span>
              <h2 className={H2}>Executive Leadership Team</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>
                Steered by seasoned corporate executives with deep commercial networks across
                Islamabad and Riyadh.
              </p>
            </div>

            <div className="mb-space-2xl grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-4">
              {LEADERS.map((leader, i) => (
                <Reveal
                  key={leader.name}
                  delay={i * 0.06}
                  className={`overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md ${CARD}`}
                >
                  <div className="relative h-64 w-full overflow-hidden bg-surface-container-high dark:bg-card-dark-from">
                    <Image
                      src={leader.src}
                      alt={leader.alt}
                      fill
                      sizes="(min-width: 1024px) 38vw, (min-width: 640px) 75vw, 145vw"
                      style={{
                        objectPosition: leader.objectPosition,
                        // transform-origin matches the crop anchor, so zooming pushes
                        // outward from the face rather than drifting away from it.
                        transformOrigin: leader.objectPosition,
                        transform: leader.zoom ? `scale(${leader.zoom})` : undefined,
                      }}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-space-md">
                    <p className="font-label-eyebrow text-label-eyebrow font-bold uppercase text-tertiary">
                      {leader.eyebrow}
                    </p>
                    <h3 className={`font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                      {leader.name}
                    </h3>
                    <p className={`font-body-sm text-body-sm font-semibold ${ACCENT}`}>{leader.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div
              className={`grid grid-cols-1 items-center gap-space-xl rounded-3xl p-space-xl shadow-sm lg:grid-cols-12 lg:p-space-2xl ${CARD}`}
            >
              <div className="lg:col-span-5">
                <CeoVideo label="Watch Address" />
              </div>

              <div className="space-y-space-sm lg:col-span-7">
                <span className={EYEBROW}>From The Desk of the CEO</span>
                <h3 className={`font-headline-md text-headline-md font-bold ${HEAD}`}>
                  A Message from our CEO 
                </h3>
                <p className={`font-body-md text-body-md ${BODY}`}>{CEO_MESSAGE}</p>
                <div className="pt-space-xs">
                  <p className={`font-label-lg text-label-lg font-bold ${HEAD}`}>Saif ur Rehman</p>
                  <p className={`font-body-sm text-body-sm ${MUTED}`}>
                    CEO, Crescent Nova International LLC (Riyadh)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — HERITAGE TIMELINE */}
        <section className={`w-full py-space-3xl ${GROUND.surface}`}>
          <div className={SHELL}>
            <div className="mx-auto mb-space-2xl max-w-2xl space-y-space-xs text-center">
              <span className={EYEBROW}>18 Years of Excellence</span>
              <h2 className={H2}>The Attari Group Heritage</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>
                From industrial roots in Wah Cantt to cross-border sovereign-scale operations in
                Riyadh.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
              {TIMELINE.map((entry, i) => (
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
                  <h3 className={`mb-space-2xs mt-1 font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                    {entry.title}
                  </h3>
                  <p className={`font-body-sm text-body-sm ${BODY}`}>{entry.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 13 — FAQ (native details/summary; no state, so React never re-renders it shut) */}
        <section className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className="mx-auto max-w-[960px] px-gutter-mobile lg:px-gutter-desktop">
            <div className="mb-space-2xl space-y-space-xs text-center">
              <span className={EYEBROW}>Clear Governance</span>
              <h2 className={H2}>Frequently Answered Questions</h2>
              <p className={`font-body-md text-body-md ${BODY}`}>
                Essential details regarding compliance, fund movements, legal safeguards, and exit
                mechanisms.
              </p>
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

        {/* 14 — SCARCITY BANNER */}
        <section className={`w-full py-space-xl ${GROUND.container}`}>
          <div className={SHELL}>
            <div
              className={`flex flex-col items-center justify-between gap-space-md rounded-2xl p-space-lg shadow-sm md:flex-row lg:p-space-xl ${CARD}`}
            >
              <div className="flex items-center gap-space-md">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-tertiary-fixed/40 text-tertiary dark:bg-tertiary/15">
                  <Icon name="hourglass_top" className="text-2xl" />
                </div>
                <div>
                  <h3 className={`font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                    Phase 1 Allocation Window Closing
                  </h3>
                  <p className={`font-body-sm text-body-sm ${BODY}`}>
                    Phase 1 JV allocation is strictly capped to ensure planned asset utilization
                    ratios across our Riyadh fleet.
                  </p>
                </div>
              </div>
              <a
                href="#contact-advisory"
                className="flex-shrink-0 rounded-xl bg-tertiary px-space-xl py-3 font-label-lg text-label-lg font-bold text-on-tertiary shadow-md transition-all hover:bg-tertiary/90 dark:text-ink"
              >
                Reserve Your Place
              </a>
            </div>
          </div>
        </section>

        {/* 15 — FINAL CTA (ink-grounded in both themes) */}
        <section
          id="contact-advisory"
          className="relative w-full overflow-hidden bg-ink py-space-3xl text-on-primary dark:border-t dark:border-tertiary/15"
        >
          <div className={`relative z-10 ${SHELL}`}>
            <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
              <div className="space-y-space-md lg:col-span-7">
                <span className="font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-[0.14em] text-tertiary-fixed">
                  Initiate Bilateral Engagement
                </span>
                <h2 className="font-display-xl text-display-xl-mobile font-bold leading-tight tracking-tight lg:text-display-xl">
                  Your Gateway to Saudi Arabia Starts Here
                </h2>
                <p className="max-w-xl font-body-lg text-body-lg text-surface-container-highest">
                  Schedule a private executive briefing with our Riyadh leadership team. Receive
                  comprehensive division prospectuses, escrow custody terms, and legal structures.
                </p>
                <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                  <a
                    href="mailto:invest@crescentnovainternational.com"
                    className="flex items-center gap-space-xs rounded-xl bg-tertiary-fixed px-space-xl py-3.5 font-label-lg text-label-lg font-bold text-on-tertiary-fixed shadow-lg transition-all hover:bg-tertiary-fixed-dim"
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
                    <span>WhatsApp Riyadh Desk</span>
                  </a>
                </div>
              </div>

              <DossierForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
