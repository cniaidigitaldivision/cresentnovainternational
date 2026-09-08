import Image from 'next/image'
import { Icon } from './Icon'

const SOCIAL = [
  { icon: 'public', label: 'Corporate Channel' },
  { icon: 'hub', label: 'Executive Network' },
  { icon: 'mail', label: 'Institutional Comms' },
]

const NAV = [
  { label: 'About CNI', href: '/about' },
  { label: 'Investors', href: '/investors' },
  { label: 'Divisions', href: '/divisions' },
  { label: 'Why KSA', href: '/why-ksa' },
  { label: 'Contact', href: '/contact' },
]

export function SiteFooter() {
  return (
    <footer className="w-full bg-inverse-surface pb-space-2xl pt-space-3xl text-inverse-on-surface dark:border-t dark:border-tertiary/15 dark:bg-ink">
      <div className="mx-auto max-w-[1280px] px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 gap-space-xl pb-space-2xl md:grid-cols-12">
          <div className="space-y-space-md md:col-span-5">
            <Image
              src="/logo.png"
              alt="Crescent Nova International"
              width={160}
              height={160}
              className="h-20 w-auto object-contain"
            />
            <p className="max-w-md font-body-md text-body-md text-surface-container-highest">
              The premier bridge between Pakistani enterprise and Saudi Arabia&apos;s Vision 2030.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              {SOCIAL.map((item) => (
                <a
                  key={item.icon}
                  href="#contact-advisory"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-highest/10 text-inverse-on-surface transition-colors hover:bg-primary dark:text-tertiary dark:hover:bg-tertiary dark:hover:text-ink"
                >
                  <Icon name={item.icon} className="text-base" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-space-sm md:col-span-3">
            <div className="h-0.5 w-10 bg-tertiary-fixed" />
            <span className="block font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-tertiary-fixed">
              Executive Navigation
            </span>
            <ul className="space-y-space-xs font-body-md text-body-md">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-surface-container-highest transition-colors hover:text-primary-fixed dark:text-tertiary/[0.86] dark:hover:text-tertiary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-space-md md:col-span-4">
            <div className="h-0.5 w-10 bg-tertiary-fixed" />
            <span className="block font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-tertiary-fixed">
              Regional Offices
            </span>
            <div className="space-y-space-xs font-body-sm text-body-sm text-surface-container-highest">
              <p className="font-bold text-inverse-on-surface">Pakistan Head Office</p>
              <p>
                Attari Group of Companies, Office # 004, Ground Floor, Green Trust Tower, Jinnah
                Avenue, Blue Area, Islamabad
              </p>
              <p className="font-semibold text-tertiary-fixed">+92 331 11 10 210</p>
            </div>
            <div className="space-y-space-2xs pt-space-xs font-body-sm text-body-sm text-surface-container-highest">
              <p className="font-bold text-inverse-on-surface">KSA Regional Offices</p>
              <p>
                Riyadh <span className="font-semibold text-tertiary-fixed">+966 59 320 9505</span>{' '}
                &middot; Jeddah &middot; Jazan
              </p>
            </div>
          </div>
        </div>

        <div className="my-space-lg h-px w-full bg-tertiary-container/40" />

        <div className="space-y-space-xs font-body-sm text-body-sm text-surface-variant">
          <p>
            &copy; 2026 Crescent Nova International. All rights reserved. Crescent Nova
            International is a Saudi-registered LLC, a subsidiary of the Attari Group of Companies.
          </p>
          <p className="font-label-md text-label-md text-outline-variant">
            All return figures referenced across this site are projected/target and not guaranteed;
            capital is at risk. This website is informational and does not constitute an offer or
            solicitation of securities.
          </p>
        </div>
      </div>
    </footer>
  )
}
