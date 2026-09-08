// Content for /contact.

export const HERO_INTRO =
  'Tell us about your investment goals. Our bilingual team responds within one business day.'

export const PAKISTAN_OFFICE = {
  label: 'Pakistan — Head Office',
  lines: [
    'Attari Group of Companies',
    'Office # 004, Ground Floor, Green Trust Tower',
    'Jinnah Avenue, Blue Area, Islamabad',
  ],
  phone: '+92 331 11 10 210',
  email: 'invest@crescentnovainternational.com',
}

export const KSA_OFFICES = [
  { city: 'Riyadh', phone: '+966 59 320 9505' },
  { city: 'Jeddah', phone: null },
  { city: 'Jazan', phone: null },
]

export const LANGUAGES = ['Urdu', 'English', 'Arabic']

export const WHATSAPP_URL = 'https://wa.me/966593209505'

// --- Wizard options -------------------------------------------------------------
// Step 1 is exactly as captured from the live page. Steps 2 and 3 render client-side
// there and could not be transcribed, so their fields are a reasonable reconstruction
// of an investor intake flow -- swap them for the real ones when available.

export const INVESTOR_TYPES = [
  { value: 'individual', label: 'Individual investor', icon: 'person' },
  { value: 'family-office', label: 'Family office', icon: 'diversity_3' },
  { value: 'institution', label: 'Institution / Company', icon: 'corporate_fare' },
]

export const TIER_OPTIONS = [
  { value: 'silver', label: 'Silver', detail: 'SAR 500K – 2M · 15% target p.a.' },
  { value: 'gold', label: 'Gold', detail: 'SAR 2M – 10M · 18% target p.a.' },
  { value: 'platinum', label: 'Platinum', detail: 'SAR 10M+ · 22% target p.a.' },
]

export const AMOUNT_RANGES = [
  'SAR 500,000 – 2,000,000',
  'SAR 2,000,000 – 10,000,000',
  'SAR 10,000,000 – 25,000,000',
  'SAR 25,000,000+',
]

export const HORIZONS = ['3 years', '4 years', '5 years', '7 years', 'Undecided']

export const TIMEFRAMES = [
  'Immediately',
  'Within 3 months',
  'Within 6 months',
  'Exploring options',
]
