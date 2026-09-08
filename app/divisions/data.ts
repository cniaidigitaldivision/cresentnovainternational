// Content for /divisions.
//
// `image` names each slide's background, served from public/divisions/.

export type Division = {
  slug: string
  n: string
  icon: string
  image: string
  phase: string
  live: boolean
  isApp?: boolean
  name: string
  tagline: string
  description: string
  highlights: string[]
}

export const DIVISIONS: Division[] = [
  {
    slug: 'automotive',
    n: '01',
    icon: 'directions_car',
    image: '/divisions/automotive.webp',
    phase: 'Phase 1 · Live',
    live: true,
    name: 'Automotive Division',
    tagline: 'TGA-licensed premium rental fleet with full compliance',
    description:
      'A TGA-licensed premium vehicle rental fleet for tourism, corporate, and expatriate markets — GPS-tracked via WASL, Green+ Nitaqat certified, and fully insured. The flagship division generates a 62.5% net profit margin.',
    highlights: [
      '10-vehicle Phase 1 fleet · SAR 1M total investment',
      'SAR 600K projected annual net profit (62.5% margin)',
      'Full TGA, Balady & Salama compliance',
      'B2B contracts with corporate & tourism operators',
    ],
  },
  {
    slug: 'business-facilitation',
    n: '02',
    icon: 'business_center',
    image: '/divisions/business-facilitation.webp',
    phase: 'Phase 1 · Live',
    live: true,
    name: 'Business Facilitation Centre',
    tagline: 'Investment setup, licensing & JV structuring',
    description:
      'An end-to-end platform for Pakistani investors entering KSA: investment facilitation, company registration, PRO services, ROI management, and joint-venture structuring with CNI as managing partner.',
    highlights: [
      'Corporate setup, Saudi licensing & PRO services',
      'Investment facilitation & ROI monitoring',
      'Joint-venture structuring (30–51% equity)',
      'Quarterly reporting & compliance support',
    ],
  },
  {
    slug: 'tour-travel',
    n: '03',
    icon: 'flight_takeoff',
    image: '/divisions/tour-travel.webp',
    phase: 'Phase 1 · Live',
    live: true,
    name: 'Tour & Travel',
    tagline: 'Umrah packages, ticketing & hotel booking',
    description:
      'Serving the Pakistani diaspora with Umrah packages, airline ticketing, hotel bookings, and group tours — earning 8–15% commissions per transaction.',
    highlights: [
      'Umrah packages (SAR 500–1,500 margin)',
      'Airline ticketing (8–12% commission)',
      'Hotel bookings (10–15% commission)',
      'Group tours & visa facilitation',
    ],
  },
  {
    slug: 'real-estate',
    n: '04',
    icon: 'apartment',
    image: '/divisions/real-estate.webp',
    phase: 'Phase 2',
    live: false,
    name: 'Real Estate & Advisory',
    tagline: 'Property investment & advisory services',
    description:
      "Property marketing, Absher ID facilitation for transactions, and residential & commercial renovation — built on the Attari Group's real-estate expertise and growing demand among 2.5M+ Pakistani residents.",
    highlights: [
      'Property marketing & digital listings',
      'Transaction & Absher facilitation',
      'Residential & commercial renovation',
      'Advisory for KSA property investment',
    ],
  },
  {
    slug: 'mundus',
    n: '05',
    icon: 'home_repair_service',
    image: '/divisions/mundus.webp',
    phase: 'Phase 2',
    live: false,
    isApp: true,
    name: 'Home Services — Mundus',
    tagline: 'On-demand home-services marketplace',
    description:
      'An on-demand platform connecting vetted maintenance technicians with residential and commercial clients across KSA on a 15–25% commission model — addressing strong demand among Saudi households and expatriate communities.',
    highlights: [
      '15–25% commission model',
      'Vetted, background-checked technicians',
      'Residential & commercial coverage',
      'Mobile-first marketplace app',
    ],
  },
  {
    slug: 'hospitality',
    n: '06',
    icon: 'hotel',
    image: '/divisions/hospitality.webp',
    phase: 'Phase 2',
    live: false,
    name: 'Hospitality Management',
    tagline: 'Hotel operations & corporate accommodation',
    description:
      "Corporate accommodation solutions, hotel management contracts, and specialized Hajj & Umrah packages for the Pakistani diaspora and business travelers — leveraging CNI's Saudi hospitality relationships.",
    highlights: [
      'Corporate accommodation solutions',
      'Hotel management contracts',
      'Specialized Hajj & Umrah packages',
      'Targeting diaspora & business travelers',
    ],
  },
  {
    slug: 'my-truck',
    n: '07',
    icon: 'local_shipping',
    image: '/divisions/my-truck.webp',
    phase: 'Phase 2–3',
    live: false,
    isApp: true,
    name: 'Logistics — My Truck',
    tagline: 'On-demand shared-load freight platform',
    description:
      'A shared-load freight platform connecting shippers with verified carriers across KSA on a 15% platform-fee model — optimizing load utilization and reducing transport costs as the Kingdom scales as a GCC logistics hub.',
    highlights: [
      '15% platform-fee model',
      'Verified carriers & live tracking',
      'Mobile-first (Arabic / English / Urdu)',
      'Optimized load utilization',
    ],
  },
  {
    slug: 'ai-digital',
    n: '08',
    icon: 'smart_toy',
    image: '/divisions/ai-and-digital.webp',
    phase: 'Phase 2–3',
    live: false,
    name: 'CNI AI & Digital Division',
    tagline: 'AI, enterprise software & digital growth',
    description:
      'Integrated AI, enterprise software and digital growth solutions for measurable business performance — serving the platform’s own divisions first, then external clients across KSA.',
    highlights: [
      'AI & Intelligent Automation',
      'Software & Enterprise Systems',
      'CRM, WhatsApp & Sales Automation',
      'Digital Marketing & Creative',
      'Cloud, Data & Cybersecurity',
    ],
  },
]

export const HERO_SUMMARY =
  'Each division is an independent revenue stream that cross-sells across the platform — maximizing value per investor while diversifying risk.'

export const PHASES = [
  {
    phase: 'Phase 1 · Live',
    live: true,
    divisions: ['Automotive', 'Business Facilitation Centre', 'Tour & Travel'],
  },
  {
    phase: 'Phase 2',
    live: false,
    divisions: ['Real Estate & Advisory', 'Home Services (Mundus)', 'Hospitality Management'],
  },
  {
    phase: 'Phase 2–3',
    live: false,
    divisions: ['Logistics (My Truck)', 'AI & Digital Division'],
  },
]
