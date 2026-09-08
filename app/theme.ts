/**
 * Shared class recipes for the two palettes.
 *
 * The light theme is the "Sovereign Bridge" M3 ramp (paper ground, teal primary, gold
 * tertiary). The dark theme is the teal/gold treatment: every surface band flattens to
 * ink, raised cards become a teal gradient hairlined in gold, and both the teal primary
 * and the gold tertiary collapse to gold.
 *
 * These exist so each treatment is written once. The mockup achieved the same thing with
 * a trailing !important stylesheet; here it is ordinary `dark:` variants gated by the
 * `dark` class on <html>, so nothing fights the cascade and the light theme still works.
 */

export const SHELL = 'mx-auto w-full max-w-[1280px] px-gutter-mobile lg:px-gutter-desktop'

/** Section grounds. Light steps through the surface ramp; dark flattens all of it to ink. */
export const GROUND = {
  surface: 'bg-surface dark:bg-ink',
  low: 'bg-surface-container-low dark:bg-ink',
  container: 'bg-surface-container dark:bg-ink',
  lowest: 'bg-surface-container-lowest dark:bg-ink',
}

/** Raised card: flat white in light, gradient + gold hairline in dark. */
export const CARD =
  'bg-surface-container-lowest dark:border dark:border-tertiary/20 dark:bg-gradient-to-br dark:from-card-dark-from dark:to-card-dark-to'

export const HEAD = 'text-on-surface dark:text-tertiary'
export const BODY = 'text-on-surface-variant dark:text-tertiary/[0.86]'
export const MUTED = 'text-outline dark:text-tertiary/60'

/** Teal accent in light, gold in dark -- the override collapsed primary and tertiary. */
export const ACCENT = 'text-primary dark:text-tertiary'

export const CHIP =
  'bg-secondary-container/40 text-primary dark:bg-tertiary/10 dark:text-tertiary'

/** Filled action. Dark inverts to a gold slab with ink text. */
export const BTN =
  'bg-primary text-on-primary hover:bg-primary-container dark:bg-tertiary dark:text-ink dark:hover:bg-tertiary-fixed-dim'

/**
 * Brand CTA -- the navbar "Request a Proposal" and the hero "Explore Investment Tiers".
 * Bright teal (#159893) that warms to gold (#d4b98c) on hover, identically in both
 * themes, so it carries no `dark:` variants.
 *
 * The label flips to ink on hover because white on #d4b98c is only 1.9:1; against the
 * gold it would be practically unreadable.
 */
export const BTN_CTA =
  'bg-teal-bright text-white transition-colors hover:bg-tertiary hover:text-ink'

/** Secondary action -- tonal in light, still a gold slab in dark, per the override. */
export const BTN_SOFT =
  'bg-surface-container-low text-primary hover:bg-surface-container-high dark:bg-tertiary dark:text-ink dark:hover:bg-tertiary-fixed-dim'

export const EYEBROW =
  'font-label-eyebrow text-label-eyebrow uppercase tracking-[0.14em] font-bold text-tertiary'

export const H2 = `font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold ${HEAD}`

/** Form field surface. */
export const FIELD =
  'w-full rounded-xl bg-surface-container-low px-space-sm py-2.5 font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary dark:bg-ink/60 dark:text-tertiary dark:placeholder:text-tertiary/40 dark:focus:bg-ink dark:focus:ring-tertiary'
