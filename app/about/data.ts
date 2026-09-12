// Content for /about. Kept beside the route rather than in the shared app/data.ts so the
// home page's datasets stay independent of it.

export const POSITIONING =
  'Crescent Nova International is the Saudi-registered international subsidiary of the Attari Group of Companies — a Pakistani conglomerate with over 18 years of proven success.'

export const VISION =
  "To become a leading multi-industry investment platform in KSA, enabling global partnerships and sustainable growth across sectors that drive Saudi Arabia's economic transformation under Vision 2030."

export const MISSION = [
  {
    icon: 'trending_up',
    text: 'Deliver scalable, ROI-focused solutions for Pakistani and international investors',
  },
  {
    icon: 'handshake',
    text: 'Build strategic alliances with local Saudi partners and global investors',
  },
  {
    icon: 'public',
    text: "Contribute meaningfully to Saudi Arabia's economic diversification",
  },
  {
    icon: 'verified_user',
    text: 'Maintain the highest standards of transparency, compliance, and investor protection',
  },
]

export const HERITAGE_INTRO =
  'From a regional enterprise in Wah Cantt to a diversified conglomerate — every phase grounded in proven revenue, not speculation.'

// Year + milestone are exactly as briefed. The supporting line under each reuses the
// description already carried for the same six milestones on the home timeline.
export const HERITAGE = [
  {
    year: '2007',
    milestone: 'Foundation in Wah Cantt',
    detail:
      'Initial formation in Wah Cantt, launching regional engineering, supply chain, and trading contracts.',
  },
  {
    year: '2013',
    milestone: 'Al Maida Frozen Foods',
    detail:
      'Establishment of Al Maida Frozen Foods, building nationwide industrial cold chain logistics.',
  },
  {
    year: '2019',
    milestone: 'Executive Housing Project',
    detail:
      'Delivery of premier residential communities, mastering land title verification and development execution.',
  },
  {
    year: '2022',
    milestone: 'Town Square D-17',
    detail:
      'Capital project delivery in Islamabad D-17 sector, delivering mixed-use commercial facilities.',
  },
  {
    year: '2023–24',
    milestone: 'Investo21 & Daniyal Marketing',
    detail:
      'Digital transformation through Investo21 technology platforms and nationwide Daniyal Marketing operations.',
  },
  {
    year: '2025–26',
    milestone: 'Chitral Royal Homes & CNI KSA',
    detail:
      'Official incorporation of Crescent Nova International in Riyadh and launch of Chitral Royal luxury resort homes.',
    current: true,
  },
]

export const DIFFERENTIATORS = [
  {
    icon: 'workspace_premium',
    title: 'Legacy of Trust',
    claim: '18+ years of Attari Group excellence with zero investor disputes',
  },
  {
    icon: 'location_on',
    title: 'Local Presence',
    claim: 'On-ground teams in Riyadh, Jeddah & Jazan for real-time support',
  },
  {
    icon: 'translate',
    title: 'Bilingual Expertise',
    claim: 'Full operational capability in Urdu, English & Arabic',
  },
  {
    icon: 'shield',
    title: 'Security-First Approach',
    claim: 'Legally binding agreements, escrow, and MIGA insurance eligibility',
  },
]

// Roles as briefed for /about (they carry the "CNI KSA" qualifier the home page omits).
// Portraits reuse the CDN sources already in the project -- the briefed local files
// (team/*.jpg) are not present in this repo.
export const ABOUT_LEADERS = [
  { name: 'Saif ur Rehman', role: 'Chief Executive Officer — CNI KSA' },
  { name: 'Khalid Malik', role: 'Director — HR, Admin & Operations' },
  { name: 'Badar Elahi', role: 'Director Business Facilitation — CNI KSA' },
]
