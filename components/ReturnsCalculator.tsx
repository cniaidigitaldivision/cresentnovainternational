'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useReducer } from 'react'
import { Icon } from './Icon'
import { ACCENT, BODY, BTN, CARD, HEAD, MUTED } from '@/app/theme'

const TIERS = [
  { id: 'silver', name: 'Silver', roi: 15, defaultAmount: 1_000_000, defaultYears: 3 },
  { id: 'gold', name: 'Gold', roi: 18, defaultAmount: 2_000_000, defaultYears: 5 },
  { id: 'platinum', name: 'Platinum', roi: 22, defaultAmount: 10_000_000, defaultYears: 7 },
] as const

const HORIZONS = [3, 4, 5, 7] as const

type TierId = (typeof TIERS)[number]['id']

type State = { tier: TierId; amount: number; years: number }
type Action =
  | { type: 'setTier'; tier: TierId }
  | { type: 'setAmount'; amount: number }
  | { type: 'setYears'; years: number }

// Selecting a tier also resets amount and horizon to that tier's defaults -- the same
// behaviour the original setCalcTier() had, expressed as one atomic transition instead
// of three imperative DOM writes.
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setTier': {
      const tier = TIERS.find((t) => t.id === action.tier)!
      return { tier: tier.id, amount: tier.defaultAmount, years: tier.defaultYears }
    }
    case 'setAmount':
      return { ...state, amount: action.amount }
    case 'setYears':
      return { ...state, years: action.years }
  }
}

// Explicit locale keeps server and client output identical, so the numbers can be
// rendered during SSR without a hydration mismatch.
const nf = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 })
const sar = (n: number) => `SAR ${nf.format(Math.round(n))}`

// Unselected pill/segment: tonal in light, an outlined gold ghost in dark.
const UNSELECTED =
  'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high dark:border dark:border-tertiary/25 dark:bg-transparent dark:text-tertiary dark:hover:bg-tertiary/10'

const RULE = 'border-surface-container-highest dark:border-tertiary/20'

export function ReturnsCalculator() {
  const reduced = useReducedMotion()
  const [state, dispatch] = useReducer(reducer, {
    tier: 'gold',
    amount: 2_000_000,
    years: 5,
  })

  const tier = TIERS.find((t) => t.id === state.tier)!
  const rate = tier.roi / 100

  // Derived on every render -- there is no second copy of these numbers to fall stale.
  const annualReturn = state.amount * rate
  const exitValue = state.amount * Math.pow(1 + rate, state.years)
  const totalReturn = exitValue - state.amount

  const pillClass = (selected: boolean) =>
    `px-space-md py-2.5 rounded-xl font-label-lg text-label-lg font-bold transition-all ${
      selected ? `shadow-sm ${BTN}` : UNSELECTED
    }`


  return (
    <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
      {/* Controls */}
      <div className="space-y-space-lg lg:col-span-6">
        <div>
          <span
            id="tier-group-label"
            className={`mb-space-xs block font-label-lg text-label-lg font-bold ${HEAD}`}
          >
            Select Investment Tier
          </span>
          <div
            className="flex flex-wrap items-center gap-space-xs"
            role="group"
            aria-labelledby="tier-group-label"
          >
            {TIERS.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={state.tier === t.id}
                onClick={() => dispatch({ type: 'setTier', tier: t.id })}
                className={pillClass(state.tier === t.id)}
              >
                {t.name} {t.roi}%
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-space-xs">
          <div className="flex items-center justify-between">
            <label htmlFor="amount-slider" className={`font-label-lg text-label-lg font-bold ${HEAD}`}>
              Capital Investment (SAR)
            </label>
            <span className={`font-headline-sm text-headline-sm font-bold ${ACCENT}`}>
              {sar(state.amount)}
            </span>
          </div>
          <input
            id="amount-slider"
            type="range"
            min={500_000}
            max={25_000_000}
            step={100_000}
            value={state.amount}
            onChange={(e) => dispatch({ type: 'setAmount', amount: Number(e.target.value) })}
            className="h-2 w-full cursor-pointer rounded-lg bg-surface-container-highest accent-primary dark:bg-tertiary/25 dark:accent-tertiary"
          />
          <div className={`flex justify-between font-label-md text-label-md ${MUTED}`}>
            <span>SAR 500,000</span>
            <span>SAR 10,000,000</span>
            <span>SAR 25,000,000+</span>
          </div>
        </div>

        <div className="space-y-space-xs">
          <div className="flex items-center justify-between">
            <span id="horizon-group-label" className={`font-label-lg text-label-lg font-bold ${HEAD}`}>
              Holding Horizon
            </span>
            <span className={`font-label-lg text-label-lg font-bold ${HEAD}`}>
              {state.years} Years
            </span>
          </div>
          <div className="grid grid-cols-4 gap-space-xs" role="group" aria-labelledby="horizon-group-label">
            {HORIZONS.map((y) => (
              <button
                key={y}
                type="button"
                aria-pressed={state.years === y}
                onClick={() => dispatch({ type: 'setYears', years: y })}
                className={`rounded-xl py-2 font-label-lg text-label-lg font-bold transition-colors ${
                  state.years === y ? BTN : UNSELECTED
                }`}
              >
                {y} Yrs
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projection card */}
      <div className={`flex flex-col justify-between rounded-2xl p-space-xl shadow-xl lg:col-span-6 ${CARD}`}>
        <div>
          <div className={`flex items-center justify-between border-b pb-space-sm ${RULE}`}>
            <div>
              <span className={`font-headline-sm text-headline-sm font-bold ${ACCENT}`}>
                {tier.name} Strategy
              </span>
              <p className={`font-body-sm text-body-sm ${BODY}`}>Annual compounding simulation</p>
            </div>
            <span className="whitespace-nowrap rounded-full bg-secondary-container px-space-sm py-1 font-label-md text-label-md font-bold text-on-secondary-container dark:bg-tertiary/15 dark:text-tertiary">
              {tier.roi}% target p.a.
            </span>
          </div>

          {/* Keyed on the values so Framer Motion re-runs the fade whenever the derived
              numbers change -- the animation follows state, it does not drive it. */}
          <div className="space-y-space-md py-space-md">
            <div className="flex items-center justify-between gap-space-sm">
              <span className={`font-body-md text-body-md ${BODY}`}>Projected Annual Return</span>
              <motion.span
                key={`annual-${annualReturn}`}
                initial={reduced ? false : { opacity: 0.35 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className={`font-headline-sm text-headline-sm font-bold ${HEAD}`}
              >
                {sar(annualReturn)}
              </motion.span>
            </div>

            <div className="flex items-center justify-between gap-space-sm">
              <span className={`font-body-md text-body-md ${BODY}`}>
                Projected Total Growth (Cumulative)
              </span>
              <motion.span
                key={`total-${totalReturn}`}
                initial={reduced ? false : { opacity: 0.35 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="font-headline-sm text-headline-sm font-bold text-tertiary"
              >
                {sar(totalReturn)}
              </motion.span>
            </div>

            <div className={`flex items-center justify-between gap-space-sm border-t pt-space-xs ${RULE}`}>
              <div>
                <span className={`font-label-lg text-label-lg font-bold ${HEAD}`}>
                  Projected Portfolio Value at Exit
                </span>
                <p className={`font-body-sm text-body-sm ${MUTED}`}>Principal + Total Net Yield</p>
              </div>
              <motion.span
                key={`exit-${exitValue}`}
                initial={reduced ? false : { opacity: 0.35 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className={`font-headline-md text-headline-md font-bold ${ACCENT}`}
              >
                {sar(exitValue)}
              </motion.span>
            </div>
          </div>
        </div>

        <div className="space-y-space-sm pt-space-sm">
          <a
            href="#contact-advisory"
            className={`flex w-full items-center justify-center gap-space-xs rounded-xl py-3.5 font-label-lg text-label-lg font-bold shadow-md transition-all ${BTN}`}
          >
            <span>Get your full projection</span>
            <Icon name="download" className="text-lg" />
          </a>
          <p className={`text-center font-label-eyebrow text-label-eyebrow ${MUTED}`}>
            Projected, compounding annually for illustration; not a guarantee or an offer of
            securities; capital at risk.
          </p>
        </div>
      </div>
    </div>
  )
}
