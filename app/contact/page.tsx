import type { Metadata } from 'next'
import Image from 'next/image'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { ProposalWizard } from '@/components/ProposalWizard'
import { ACCENT, BODY, CARD, CHIP, EYEBROW, GROUND, H2, HEAD, MUTED, SHELL } from '../theme'
import { HERO_INTRO, KSA_OFFICES, LANGUAGES, PAKISTAN_OFFICE, WHATSAPP_URL } from './data'

export const metadata: Metadata = {
  title: 'Contact · CNI',
  description:
    'Request a personalized investment proposal. Our bilingual team is available in Urdu, English, and Arabic.',
}

export default function Contact() {
  return (
    <>
      <SiteHeader />

      <main id="top" className={`w-full pt-20 lg:pt-24 ${GROUND.surface}`}>
        {/* 1 — HERO */}
        <section className="relative flex min-h-[360px] w-full items-center overflow-hidden bg-ink lg:min-h-[420px]">
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
                  Partner With Us
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl-mobile font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] lg:text-display-xl">
                Request a{' '}
                <span className="text-primary-fixed-dim underline decoration-tertiary-fixed decoration-4 underline-offset-8">
                  Proposal
                </span>
              </h1>

              <p className="max-w-2xl font-body-lg text-body-lg text-white/85">{HERO_INTRO}</p>
            </Reveal>
          </div>
        </section>

        {/* 2 + 3 — CONTACT DETAILS & WIZARD */}
        <section id="contact-advisory" className={`w-full py-space-3xl ${GROUND.low}`}>
          <div className={SHELL}>
            <div className="grid grid-cols-1 items-start gap-space-xl lg:grid-cols-12">
              {/* Contact details */}
              <div className="space-y-space-lg lg:col-span-5">
                <div className="space-y-space-xs">
                  <span className={EYEBROW}>Get in touch</span>
                  <h2 className={H2}>Speak with our team</h2>
                </div>

                <Reveal className={`rounded-2xl p-space-lg shadow-sm ${CARD}`}>
                  <div className="flex items-start gap-space-md">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${CHIP}`}
                    >
                      <Icon name="apartment" className="text-2xl" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`mb-space-2xs font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                        {PAKISTAN_OFFICE.label}
                      </h3>
                      <address className={`not-italic font-body-sm text-body-sm ${BODY}`}>
                        {PAKISTAN_OFFICE.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                      <div className="mt-space-sm space-y-space-2xs">
                        <a
                          href={`tel:${PAKISTAN_OFFICE.phone.replace(/\s/g, '')}`}
                          className={`flex items-center gap-space-xs font-label-lg text-label-lg font-bold transition-colors hover:text-tertiary dark:hover:text-tertiary ${ACCENT}`}
                        >
                          <Icon name="call" className="text-base" />
                          {PAKISTAN_OFFICE.phone}
                        </a>
                        <a
                          href={`mailto:${PAKISTAN_OFFICE.email}`}
                          className={`flex items-center gap-space-xs break-all font-label-lg text-label-lg font-bold transition-colors hover:text-tertiary dark:hover:text-tertiary ${ACCENT}`}
                        >
                          <Icon name="mail" className="text-base" />
                          {PAKISTAN_OFFICE.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.06} className={`rounded-2xl p-space-lg shadow-sm ${CARD}`}>
                  <div className="flex items-start gap-space-md">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${CHIP}`}
                    >
                      <Icon name="location_on" className="text-2xl" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className={`mb-space-sm font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                        KSA Regional Offices
                      </h3>
                      <ul className="space-y-space-xs">
                        {KSA_OFFICES.map((office) => (
                          <li
                            key={office.city}
                            className="flex items-center justify-between gap-space-sm border-b border-outline-variant/30 pb-space-xs last:border-0 last:pb-0 dark:border-tertiary/15"
                          >
                            <span className={`font-label-lg text-label-lg font-bold ${HEAD}`}>
                              {office.city}
                            </span>
                            {office.phone ? (
                              <a
                                href={`tel:${office.phone.replace(/\s/g, '')}`}
                                className={`font-body-sm text-body-sm font-semibold transition-colors hover:text-tertiary dark:hover:text-tertiary ${ACCENT}`}
                              >
                                {office.phone}
                              </a>
                            ) : (
                              <span className={`font-body-sm text-body-sm ${MUTED}`}>—</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-space-xs rounded-xl border border-outline-variant/60 px-space-lg py-3.5 font-label-lg text-label-lg font-bold transition-colors hover:border-tertiary hover:text-tertiary dark:border-tertiary/25 dark:text-tertiary dark:hover:bg-tertiary/10 ${HEAD}`}
                >
                  <Icon name="chat" className="text-lg" />
                  <span>WhatsApp us</span>
                </a>

                {/* 4 — LANGUAGE SUPPORT */}
                <Reveal delay={0.12} className={`rounded-2xl p-space-lg shadow-sm ${CARD}`}>
                  <div className="flex items-start gap-space-md">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${CHIP}`}
                    >
                      <Icon name="translate" className="text-2xl" />
                    </div>
                    <div>
                      <h3 className={`mb-space-2xs font-headline-sm text-headline-sm font-bold ${HEAD}`}>
                        Bilingual support
                      </h3>
                      <p className={`font-body-sm text-body-sm ${BODY}`}>
                        Our team is available in {LANGUAGES.slice(0, -1).join(', ')}, and{' '}
                        {LANGUAGES.at(-1)}.
                      </p>
                      <div className="mt-space-sm flex flex-wrap gap-space-2xs">
                        {LANGUAGES.map((lang) => (
                          <span
                            key={lang}
                            className="rounded-full bg-surface-container-high px-space-sm py-1 font-label-md text-label-md font-bold text-on-surface-variant dark:bg-white/5 dark:text-tertiary/70"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Wizard */}
              <div className="lg:col-span-7">
                <ProposalWizard />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
