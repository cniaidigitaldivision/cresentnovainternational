'use client'

import { useState, type FormEvent } from 'react'
import { Icon } from './Icon'
import { ACCENT, BODY, CARD, FIELD, HEAD } from '@/app/theme'

const FIELDS = [
  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. Tariq Malik', autoComplete: 'name' },
  {
    id: 'email',
    label: 'Corporate / Personal Email',
    type: 'email',
    placeholder: 'name@company.com',
    autoComplete: 'email',
  },
  {
    id: 'phone',
    label: 'Direct Phone / WhatsApp',
    type: 'tel',
    placeholder: '+92 / +966 ...',
    autoComplete: 'tel',
  },
] as const

const RANGES = [
  'Silver (SAR 500,000 – 2,000,000)',
  'Gold (SAR 2,000,000 – 10,000,000)',
  'Platinum (SAR 10,000,000+)',
]

const PANEL = `rounded-3xl p-space-xl shadow-2xl lg:col-span-5 ${CARD}`
const LABEL = `mb-1 block font-label-md text-label-md font-bold ${HEAD}`

export function DossierForm() {
  // Replaces the mockup's inline onsubmit="...alert(...)" with in-page confirmation.
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={PANEL}>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-primary dark:bg-tertiary/15 dark:text-tertiary`}
        >
          <Icon name="mark_email_read" className="text-2xl" />
        </div>
        <h3 className={`mt-space-md font-headline-sm text-headline-sm font-bold ${HEAD}`}>
          Inquiry received
        </h3>
        <p className={`mt-space-2xs font-body-md text-body-md ${BODY}`}>
          Thank you. A CNI Senior Advisory Director will reach out to you within one business day
          with the audited financial schedules.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={`mt-space-md font-label-lg text-label-lg font-bold transition-colors hover:text-primary-container ${ACCENT}`}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <div className={PANEL}>
      <h3 className={`mb-space-2xs font-headline-sm text-headline-sm font-bold ${HEAD}`}>
        Request Investor Dossier
      </h3>
      <p className={`mb-space-md font-body-sm text-body-sm ${BODY}`}>
        Complete to receive audited financial schedules within 24 business hours.
      </p>

      <form className="space-y-space-xs" onSubmit={handleSubmit}>
        {FIELDS.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className={LABEL}>
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              required
              className={FIELD}
            />
          </div>
        ))}

        <div>
          <label htmlFor="capital-range" className={LABEL}>
            Estimated Capital Range
          </label>
          <select id="capital-range" name="capital-range" defaultValue={RANGES[1]} className={FIELD}>
            {RANGES.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="pt-space-xs">
          <button
            type="submit"
            className={`w-full rounded-xl py-3 font-label-lg text-label-lg font-bold shadow-md transition-all bg-teal-bright text-on-primary hover:bg-primary-container dark:bg-tertiary dark:text-ink dark:hover:bg-tertiary-fixed-dim`}
          >
            Transmit Confidential Inquiry
          </button>
        </div>
      </form>
    </div>
  )
}
