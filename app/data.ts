// Content for the repeating sections, lifted out of the markup so each grid is a map
// over one source of truth rather than seven near-identical hand-copied blocks.

export const KEY_STATS = [
  { value: '18+', label: 'Years of Legacy', detail: 'Attari Group institutional track record since 2007' },
  { value: '2.5M+', label: 'Pakistani Diaspora', detail: 'Thriving commercial corridor across Saudi Arabia' },
  { value: '8', label: 'Flagship Divisions', detail: 'Diversified recurring revenue engines in key sectors' },
  { value: '0', label: 'Investor Disputes', detail: '100% fiduciary compliance over 18 continuous years' },
]

export const COMPLIANCE = [
  { icon: 'policy', label: 'Aligned with Vision 2030' },
  { icon: 'gavel', label: 'Saudi Investment Law (2024)' },
  { icon: 'handshake', label: 'Pakistani-Saudi BIT (1996)' },
  { icon: 'directions_car', label: 'TGA-Licensed Operations' },
  { icon: 'domain_verification', label: 'ZATCA & GOSI Registered' },
]

export const DIVISIONS = [
  {
    n: '01',
    icon: 'local_taxi',
    title: 'Automotive Division',
    image: '/divisions/automotive.webp',
    slug: 'automotive',
    body: 'TGA-licensed premium rental fleet, luxury VIP transport, and commercial car hire with verified telematics & full regulatory compliance.',
  },
  {
    n: '02',
    icon: 'corporate_fare',
    title: 'Business Facilitation Centre',
    image: '/divisions/business-facilitation.webp',
    slug: 'business-facilitation',
    body: 'End-to-end investment setup in KSA: MISA licensing, CR issuance, corporate bank account setup, commercial office lease & JV structuring.',
  },
  {
    n: '03',
    icon: 'flight_takeoff',
    title: 'Tour & Travel',
    image: '/divisions/tour-travel.webp',
    slug: 'tour-travel',
    body: 'High-touch Umrah packages, corporate delegations, premium concierge ticketing, and proprietary hotel booking pipelines across Makkah & Madinah.',
  },
  {
    n: '04',
    icon: 'apartment',
    title: 'Real Estate & Advisory',
    image: '/divisions/real-estate.webp',
    slug: 'real-estate',
    body: 'Direct access to premium commercial, residential, and industrial assets in Riyadh & Jeddah, anchored by deep feasibility intelligence.',
  },
  {
    n: '05',
    icon: 'home_repair_service',
    title: 'Home Services — Mundus',
    image: '/divisions/mundus.webp',
    slug: 'mundus',
    body: 'App-driven marketplace offering vetted residential maintenance, MEP, facility cleaning, and automated subscription care for corporate compounds.',
  },
  {
    n: '06',
    icon: 'hotel',
    title: 'Hospitality Management',
    image: '/divisions/hospitality.webp',
    slug: 'hospitality',
    body: "Boutique hotel management, serviced apartments, and specialized corporate accommodation solutions serving Riyadh's fast-scaling executive workforce.",
  },
  {
    n: '07',
    icon: 'local_shipping',
    title: 'Logistics — My Truck',
    image: '/divisions/my-truck.webp',
    slug: 'my-truck',
    body: 'On-demand shared-load freight matching system transforming intercity cargo transit between major logistics hubs including Dammam, Riyadh, and Jeddah.',
  },
  {
    n: '08',
    icon: 'smart_toy',
    title: 'CNI AI & Digital Division',
    image: '/divisions/ai-and-digital.webp',
    slug: 'ai-digital',
    body: 'Integrated AI, enterprise software, and digital growth solutions — intelligent automation, CRM & sales systems, creative marketing, and cloud, data & cybersecurity built for measurable business performance.',
  },
]

export const TIERS = [
  {
    id: 'silver',
    eyebrow: 'Standard Allocation',
    eyebrowClass: 'text-outline dark:text-tertiary/60',
    name: 'Silver Tier',
    blurb: 'Ideal for first-time KSA cross-border investors.',
    roi: '15%',
    horizon: 'Target Annual ROI · 3-Year Horizon',
    range: 'SAR 500K — 2M',
    featured: false,
    features: [
      'Pro-rata automotive & services allocation',
      'Quarterly audited dividend payout',
      'Secured escrow account custody',
      'Standard investor portal access',
    ],
  },
  {
    id: 'gold',
    eyebrow: 'Strategic Partnership',
    eyebrowClass: 'text-tertiary',
    name: 'Gold Tier',
    blurb: 'Strategic partnership with priority cross-division access.',
    roi: '18%',
    horizon: 'Target Annual ROI · 5-Year Horizon',
    range: 'SAR 2M — 10M',
    featured: true,
    features: [
      'Priority across hospitality, travel & automotive',
      'Quarterly direct dividend distributions',
      'Dedicated institutional relationship director',
      'Priority capital reallocation opportunities',
      'VIP concierge delegation service in Riyadh',
    ],
  },
  {
    id: 'platinum',
    eyebrow: 'Institutional Syndicate',
    eyebrowClass: 'text-primary dark:text-tertiary',
    name: 'Platinum Tier',
    blurb: 'Full board participation & exclusive co-investment rights.',
    roi: '22%',
    horizon: 'Target Annual ROI · 7-Year Horizon',
    range: 'SAR 10M+',
    featured: false,
    features: [
      'Direct advisory board observation seat',
      'Co-investment rights on proprietary real estate',
      'Custom tailored tax structuring via MISA / BIT',
      'Direct access to Attari Group executive leadership',
    ],
  },
]

export const STEPS = [
  {
    n: 1,
    title: 'Choose Your Tier',
    body: 'Select between Silver, Gold, or Platinum allocation tiers based on your capital deployment objectives and horizon.',
    phase: 'PHASE 01: ASSESSMENT',
  },
  {
    n: 2,
    title: 'Submit Your Interest',
    body: 'Complete the secure Investor Brief. Our cross-border advisory desk responds within exactly one business day with full dossier access.',
    phase: 'PHASE 02: MANDATE',
  },
  {
    n: 3,
    title: 'We Structure the JV',
    body: 'Execution of Sharia-aligned Joint Venture legal documentation, MISA clearance, and deposit into regulated escrow accounts.',
    phase: 'PHASE 03: LEGAL CLOSING',
  },
  {
    n: 4,
    title: 'Receive Distributions',
    body: 'Automated quarterly dividend releases starting from H2 Year 1, paired with transparent digital investor reporting dashboards.',
    phase: 'PHASE 04: REALIZATION',
  },
]

export const TRUST = [
  {
    icon: 'account_balance',
    title: 'Saudi-Registered LLC',
    body: 'Headquartered in Riyadh under full commercial registration and Ministry of Commerce authority.',
  },
  {
    icon: 'lock',
    title: 'Escrow-Protected Funds',
    body: 'Deployment accounts held through Banque Saudi Fransi / NCB under strict capital milestone release criteria.',
  },
  {
    icon: 'query_stats',
    title: 'Quarterly Independent Audits',
    body: 'External licensed accounting firms review division balances, revenue waterfalls, and investor shares.',
  },
  {
    icon: 'verified',
    title: 'Dual Legal Protection',
    body: 'Fully bound by the updated Saudi Investment Law (2024) and the historic Pakistan—Saudi BIT (1996).',
  },
  {
    icon: 'security',
    title: 'MIGA Insurance Eligibility',
    body: 'Qualifying cross-border transactions structured to access World Bank MIGA multilateral guarantees.',
  },
  {
    icon: 'balance',
    title: 'Sharia-Aligned Governance',
    body: 'Asset-backed operations free from speculative ambiguity (Gharar) and interest (Riba) structures.',
  },
]

export const MARKET = [
  {
    value: '$500B+',
    title: 'Mega Projects',
    body: 'NEOM, Red Sea Project, Qiddiya, and Diriyah creating unprecedented service and logistics demand.',
    tag: 'Vision 2030 Driver',
  },
  {
    value: '100%',
    title: 'Foreign Ownership',
    body: 'Reformed MISA investment legislation grants complete ownership with direct capital repatriation rights.',
    tag: 'Regulatory Freedom',
  },
  {
    value: '0%',
    title: 'Special Zone Taxes',
    body: 'Generous corporate tax exemptions, customs duty waivers, and subsidized SIDF industrial loans.',
    tag: 'Fiscal Advantage',
  },
  {
    value: '$200B+',
    title: 'Pakistani-Saudi Treaties',
    body: 'Bilateral intergovernmental commitments cementing priority trade, banking and workforce accords.',
    tag: 'Bilateral Momentum',
  },
]

export const LEADERS = [
  {
    eyebrow: 'Executive Office',
    name: 'Saif ur Rehman',
    role: 'Chief Executive Officer, CNI KSA',
    alt: 'Executive portrait of Saif ur Rehman, Chief Executive Officer of Crescent Nova International',
    src: '/saif-ur-rehman.png',
    // Wide desk scene -- the subject reads small, so zoom in on the face.
    objectPosition: '50% 22%',
    zoom: 1.45,
  },
  {
    eyebrow: 'Strategic Expansion',
    name: 'Shoaib Ashraf',
    role: 'GM, Growth & Strategic Partnerships',
    alt: 'Corporate headshot of Shoaib Ashraf, General Manager of Growth and Strategic Partnerships',
    src: '/shoaib-ashraf.png',
    // Square crop leaves a lot of chest in frame; tighten onto the face.
    objectPosition: '50% 15%',
    zoom: 1.25,
  },
  {
    eyebrow: 'Operations & HR',
    name: 'Khalid Malik',
    role: 'Director, HR, Admin & Operations',
    alt: 'Portrait of Khalid Malik, Director of HR, Administration and Operations',
    src: '/khalid-malik.png',
    // This shot is a tall 800x1216 portrait; the others are near-square. object-cover
    // therefore crops ~200px vertically here, and centring that crop cuts off the top of
    // the head. Anchoring near the top keeps the face framed.
    objectPosition: '50% 10%',
  },
  {
    eyebrow: 'Advisory & Licensing',
    name: 'Badar Elahi',
    role: 'Director, Business Facilitation',
    alt: 'Executive business headshot of Badar Elahi, Director of Business Facilitation',
    src: '/badar-elahi.png',
  },
]

// Shared by the home page CEO banner and the About page CEO section.
export const CEO_MESSAGE =
  "“At Crescent Nova International, our purpose is simple: to build a trusted bridge between Pakistani enterprise and the extraordinary opportunities of Saudi Arabia's Vision 2030. Eighteen years of disciplined, dispute-free stewardship have taught us that lasting returns are built on transparency, governance, and genuine partnership. I warmly invite you to watch my message — and to begin a conversation with our team.”"

export const CEO_KEYNOTE_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAHavXyIxzhsr6apDSMui2B4nPIsa47xyofd1Kt-kHYA1eTJcLfmb1ubP5X3T6AV7EsiQcuMjtg-g_Xj4FY5x8PlnwDtCBD2sXHjayL_EgLhAG2xQvn68a0wncEBnVLmN7mUTWhvvMzhDdmTFNB8CLk5U0PtxKfARJUct3Wtmy6srmYwGK7iSVpqvb5EpWYFG0VK6yB28oysi6vSuMICyZ08egGU8R7DED_X4UvjJzOLIE1QMV9W0jD'

export const TIMELINE = [
  {
    year: '2007',
    title: 'Foundational Inception',
    body: 'Initial formation in Wah Cantt, launching regional engineering, supply chain, and trading contracts.',
  },
  {
    year: '2013',
    title: 'Al Maida Foods',
    body: 'Establishment of Al Maida Frozen Foods, building nationwide industrial cold chain logistics.',
  },
  {
    year: '2019',
    title: 'Executive Housing',
    body: 'Delivery of premier residential communities, mastering land title verification and development execution.',
  },
  {
    year: '2022',
    title: 'Town Square D-17',
    body: 'Capital project delivery in Islamabad D-17 sector, delivering mixed-use commercial facilities.',
  },
  {
    year: '2023–2024',
    title: 'Investo21 & Daniyal',
    body: 'Digital transformation through Investo21 technology platforms and nationwide Daniyal Marketing operations.',
  },
  {
    year: '2025–2026',
    title: 'CNI KSA & Chitral Royal',
    body: 'Official incorporation of Crescent Nova International in Riyadh and launch of Chitral Royal luxury resort homes.',
    current: true,
  },
]

export const FAQS = [
  {
    q: 'How is my invested capital legally protected in Saudi Arabia?',
    a: 'Your investment is protected under three concurrent layers: first, direct registration under the Saudi Investment Law of 2024 granting equal investor protection rights; second, the bilateral Pakistan-Saudi Bilateral Investment Treaty (BIT 1996) prohibiting expropriation; and third, escrow-account isolation with Banque Saudi Fransi / NCB where capital release is gated by verifiable project milestones.',
  },
  {
    q: 'Are the projected return rates (15–22%) guaranteed?',
    a: 'Return percentages are projected target ranges based on audited operating margins of our active subsidiaries (fleet leasing, travel, and logistics). Per regulatory requirements across both jurisdictions, return rates cannot be contractually guaranteed; capital is at commercial risk, though mitigated by hard physical asset ownership in commercial vehicles and real estate.',
  },
  {
    q: 'What is the minimum holding horizon before dividend distribution?',
    a: 'Initial distributions begin from the second half (H2) of Year 1 to account for asset deployment and onboarding setup. Following Year 1, dividends are calculated and remitted on a quarterly basis accompanied by external independent auditor statements directly to your designated bank account.',
  },
  {
    q: 'Is this vehicle strictly Sharia-compliant?',
    a: 'Yes. All 8 divisions generate cash flows strictly through physical commercial services (Musharakah / Mudarabah principles), real asset leasing (Ijarah), and legitimate trading margins. We do not participate in interest-bearing debt instruments, derivatives, or speculative trading.',
  },
  {
    q: 'Can Pakistani non-resident investors repatriate capital?',
    a: 'Yes. Saudi Arabian banking laws allow full, unrestricted repatriation of profits and initial capital in Saudi Riyals (SAR) or US Dollars (USD). Our Business Facilitation Centre manages all tax clearance certificates through ZATCA prior to cross-border wiring.',
  },
  {
    q: 'What happens at the end of the investment tenure?',
    a: 'Upon tenure completion (3, 5, or 7 years depending on tier), you may elect to liquidate your principal along with final distributions, rollover into active expansion tiers, or convert your partnership interest into equity in upcoming public listing subsidiaries.',
  },
]
