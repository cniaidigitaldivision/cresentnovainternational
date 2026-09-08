'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useReducer, type FormEvent } from 'react'
import { Icon } from './Icon'
import { ACCENT, BODY, BTN_CTA, CARD, FIELD, HEAD, MUTED } from '@/app/theme'
import {
  AMOUNT_RANGES,
  HORIZONS,
  INVESTOR_TYPES,
  LANGUAGES,
  TIER_OPTIONS,
  TIMEFRAMES,
} from '@/app/contact/data'

const TOTAL_STEPS = 3

type Data = {
  investorType: string
  tier: string
  amount: string
  horizon: string
  timeframe: string
  name: string
  email: string
  phone: string
  language: string
  message: string
}

type State = { step: number; direction: number; submitted: boolean; data: Data }

type Action =
  | { type: 'set'; field: keyof Data; value: string }
  | { type: 'next' }
  | { type: 'back' }
  | { type: 'submit' }
  | { type: 'reset' }

const initial: State = {
  step: 0,
  direction: 0,
  submitted: false,
  data: {
    investorType: '',
    tier: '',
    amount: '',
    horizon: '',
    timeframe: '',
    name: '',
    email: '',
    phone: '',
    language: 'English',
    message: '',
  },
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set':
      return { ...state, data: { ...state.data, [action.field]: action.value } }
    case 'next':
      return { ...state, step: Math.min(state.step + 1, TOTAL_STEPS - 1), direction: 1 }
    case 'back':
      return { ...state, step: Math.max(state.step - 1, 0), direction: -1 }
    case 'submit':
      return { ...state, submitted: true }
    case 'reset':
      return initial
  }
}

// Which fields each step requires before Next unlocks.
const REQUIRED: (keyof Data)[][] = [
  ['investorType', 'tier'],
  ['amount', 'horizon', 'timeframe'],
  ['name', 'email', 'phone'],
]

const LABEL = `mb-space-xs block font-label-lg text-label-lg font-bold`
const CHOICE_BASE =
  'flex w-full items-center gap-space-sm rounded-xl border px-space-md py-3 text-left transition-all'
const CHOICE_OFF =
  'border-outline-variant/60 bg-surface-container-low text-on-surface hover:border-tertiary/60 dark:border-tertiary/25 dark:bg-transparent dark:text-tertiary dark:hover:bg-tertiary/10'
const CHOICE_ON = 'border-tertiary bg-tertiary/15 text-on-surface dark:text-tertiary'

export function ProposalWizard() {
  const reduced = useReducedMotion()
  const [state, dispatch] = useReducer(reducer, initial)
  const { step, data, submitted } = state

  const canAdvance = REQUIRED[step].every((f) => data[f].trim() !== '')
  const isLast = step === TOTAL_STEPS - 1

  const set = (field: keyof Data) => (value: string) => dispatch({ type: 'set', field, value })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!canAdvance) return
    if (isLast) dispatch({ type: 'submit' })
    else dispatch({ type: 'next' })
  }

  if (submitted) {
    return (
      <div className={`rounded-3xl p-space-xl shadow-xl lg:p-space-2xl ${CARD}`}>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container text-primary dark:bg-tertiary/15 dark:text-tertiary">
          <Icon name="mark_email_read" className="text-3xl" />
        </div>
        <h3 className={`mt-space-md font-headline-md text-headline-md font-bold ${HEAD}`}>
          Proposal request received
        </h3>
        <p className={`mt-space-xs font-body-md text-body-md ${BODY}`}>
          Thank you, {data.name.split(' ')[0] || 'and welcome'}. A CNI advisory director will reach
          out within one business day with your personalized proposal.
        </p>
        <button
          type="button"
          onClick={() => dispatch({ type: 'reset' })}
          className={`mt-space-md font-label-lg text-label-lg font-bold transition-colors ${ACCENT}`}
        >
          Submit another request
        </button>
      </div>
    )
  }

  const slide = reduced
    ? { initial: false as const, animate: {}, exit: {} }
    : {
        initial: { opacity: 0, x: state.direction >= 0 ? 30 : -30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: state.direction >= 0 ? -30 : 30 },
      }

  return (
    <div className={`rounded-3xl p-space-xl shadow-xl lg:p-space-2xl ${CARD}`}>
      {/* Progress */}
      <div className="mb-space-lg">
        <div className="flex items-center justify-between">
          <span className={`font-label-lg text-label-lg font-bold ${ACCENT}`} aria-live="polite">
            Step {step + 1} of {TOTAL_STEPS}
          </span>
          <span className={`font-label-md text-label-md ${MUTED}`}>
            {['Your profile', 'Investment', 'Contact details'][step]}
          </span>
        </div>
        <div
          className="mt-space-xs flex gap-space-2xs"
          role="progressbar"
          aria-valuenow={step + 1}
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
        >
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= step ? 'bg-tertiary' : 'bg-outline/30 dark:bg-tertiary/20'
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={slide.initial}
            animate={slide.animate}
            exit={slide.exit}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-space-lg"
          >
            {step === 0 && (
              <>
                <fieldset>
                  <legend className={`${LABEL} ${HEAD}`}>I am a</legend>
                  <div className="grid grid-cols-1 gap-space-xs sm:grid-cols-3">
                    {INVESTOR_TYPES.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        aria-pressed={data.investorType === opt.value}
                        onClick={() => set('investorType')(opt.value)}
                        className={`${CHOICE_BASE} ${
                          data.investorType === opt.value ? CHOICE_ON : CHOICE_OFF
                        }`}
                      >
                        <Icon name={opt.icon} className="text-xl" />
                        <span className="font-label-lg text-label-lg font-bold">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className={`${LABEL} ${HEAD}`}>Tier of interest</legend>
                  <div className="grid grid-cols-1 gap-space-xs sm:grid-cols-3">
                    {TIER_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        aria-pressed={data.tier === opt.value}
                        onClick={() => set('tier')(opt.value)}
                        className={`${CHOICE_BASE} flex-col !items-start gap-space-2xs ${
                          data.tier === opt.value ? CHOICE_ON : CHOICE_OFF
                        }`}
                      >
                        <span className="font-label-lg text-label-lg font-bold">{opt.label}</span>
                        <span className={`font-body-sm text-body-sm ${BODY}`}>{opt.detail}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
              </>
            )}

            {step === 1 && (
              <>
                <div>
                  <label htmlFor="amount" className={`${LABEL} ${HEAD}`}>
                    Intended capital
                  </label>
                  <select
                    id="amount"
                    value={data.amount}
                    onChange={(e) => set('amount')(e.target.value)}
                    className={FIELD}
                  >
                    <option value="">Select a range…</option>
                    {AMOUNT_RANGES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="horizon" className={`${LABEL} ${HEAD}`}>
                    Holding horizon
                  </label>
                  <select
                    id="horizon"
                    value={data.horizon}
                    onChange={(e) => set('horizon')(e.target.value)}
                    className={FIELD}
                  >
                    <option value="">Select a horizon…</option>
                    {HORIZONS.map((h) => (
                      <option key={h}>{h}</option>
                    ))}
                  </select>
                </div>

                <fieldset>
                  <legend className={`${LABEL} ${HEAD}`}>Intended timeframe</legend>
                  <div className="grid grid-cols-1 gap-space-xs sm:grid-cols-2">
                    {TIMEFRAMES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={data.timeframe === t}
                        onClick={() => set('timeframe')(t)}
                        className={`${CHOICE_BASE} ${
                          data.timeframe === t ? CHOICE_ON : CHOICE_OFF
                        }`}
                      >
                        <span className="font-label-lg text-label-lg font-bold">{t}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
              </>
            )}

            {step === 2 && (
              <>
                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={`${LABEL} ${HEAD}`}>
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Tariq Malik"
                      value={data.name}
                      onChange={(e) => set('name')(e.target.value)}
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`${LABEL} ${HEAD}`}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      value={data.email}
                      onChange={(e) => set('email')(e.target.value)}
                      className={FIELD}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={`${LABEL} ${HEAD}`}>
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+92 / +966 …"
                      value={data.phone}
                      onChange={(e) => set('phone')(e.target.value)}
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label htmlFor="language" className={`${LABEL} ${HEAD}`}>
                      Preferred language
                    </label>
                    <select
                      id="language"
                      value={data.language}
                      onChange={(e) => set('language')(e.target.value)}
                      className={FIELD}
                    >
                      {LANGUAGES.map((l) => (
                        <option key={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`${LABEL} ${HEAD}`}>
                    Anything else? <span className={MUTED}>(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your goals…"
                    value={data.message}
                    onChange={(e) => set('message')(e.target.value)}
                    className={FIELD}
                  />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-space-xl flex items-center justify-between gap-space-md">
          <button
            type="button"
            onClick={() => dispatch({ type: 'back' })}
            disabled={step === 0}
            className={`flex items-center gap-space-xs rounded-xl px-space-lg py-3 font-label-lg text-label-lg font-bold transition-all disabled:cursor-not-allowed disabled:opacity-40 ${CHOICE_OFF}`}
          >
            <Icon name="arrow_back" className="text-lg" />
            <span>Back</span>
          </button>

          <button
            type="submit"
            disabled={!canAdvance}
            className={`flex items-center gap-space-xs rounded-xl px-space-xl py-3 font-label-lg text-label-lg font-bold shadow-md transition-all disabled:cursor-not-allowed disabled:opacity-40 ${BTN_CTA}`}
          >
            <span>{isLast ? 'Submit request' : 'Next'}</span>
            <Icon name={isLast ? 'send' : 'arrow_forward'} className="text-lg" />
          </button>
        </div>

        {!canAdvance && (
          <p className={`mt-space-sm text-right font-body-sm text-body-sm ${MUTED}`}>
            Complete the fields above to continue.
          </p>
        )}
      </form>
    </div>
  )
}
