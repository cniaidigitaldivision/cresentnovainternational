import type { Config } from 'tailwindcss'

// The design tokens below are the mockup's `theme.extend`. Two families back every
// typographic token, so they are declared once and reused rather than repeated as
// bare family names -- a bare 'Manrope' would never resolve, since next/font serves
// the face under a generated family name exposed via these CSS variables.
const manrope = ['var(--font-manrope)', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
const jakarta = ['var(--font-jakarta)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif']

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface-tint': '#00696b',
        'on-error-container': '#93000a',
        secondary: '#3c6568',
        'inverse-on-surface': '#f2f1ec',
        surface: '#fbf9f4',
        'on-tertiary-fixed': '#261900',
        'secondary-fixed-dim': '#a3ced1',
        'surface-container': '#f0eee9',
        'inverse-primary': '#69d7d9',
        'tertiary-container': '#d4b98c',
        'surface-container-highest': '#e4e2dd',
        error: '#ba1a1a',
        'surface-container-low': '#f5f3ee',
        'surface-container-lowest': '#ffffff',
        'secondary-container': '#bce8eb',
        'primary-container': '#008284',
        'on-primary-fixed-variant': '#004f51',
        'surface-variant': '#e4e2dd',
        'secondary-fixed': '#bfeaee',
        'outline-variant': '#bcc9c9',
        'on-surface': '#1b1c19',
        tertiary: '#d4b98c',
        'surface-bright': '#fbf9f4',
        'tertiary-fixed': '#d4b98c',
        'on-primary-fixed': '#002020',
        primary: '#006768',
        'on-background': '#1b1c19',
        background: '#fbf9f4',
        'inverse-surface': '#30312e',
        'on-secondary-fixed-variant': '#224d50',
        'on-secondary': '#ffffff',
        'surface-container-high': '#eae8e3',
        'surface-dim': '#dbdad5',
        'on-tertiary-container': '#fffbff',
        'on-surface-variant': '#3d4949',
        'on-primary': '#ffffff',
        'on-tertiary': '#ffffff',
        'tertiary-fixed-dim': '#d4b98c',
        'primary-fixed-dim': '#69d7d9',
        outline: '#6d7979',
        'on-secondary-container': '#40696c',
        'on-primary-container': '#f3fffe',
        'on-tertiary-fixed-variant': '#57441d',
        'primary-fixed': '#87f4f5',
        'on-secondary-fixed': '#002022',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        // Non-token literals the mockup hard-codes as hex; named so they are greppable.
        ink: '#0b1416',
        'teal-bright': '#159893',
        // Dark-theme raised-card gradient. Every other dark colour reuses an existing
        // token (ground = ink, text/accent = tertiary, header accent = primary-fixed-dim),
        // so these two are the only additions the dark variant needs.
        'card-dark-from': '#102326',
        'card-dark-to': '#164c4e',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      spacing: {
        'space-4xl': '6rem',
        'gutter-mobile': '1rem',
        'space-2xl': '3rem',
        'gutter-desktop': '2rem',
        'space-lg': '1.5rem',
        'space-xs': '0.5rem',
        'space-section': '7.5rem',
        'container-max': '1280px',
        'space-3xl': '4.5rem',
        'space-md': '1rem',
        'space-2xs': '0.25rem',
        'space-sm': '0.75rem',
        'space-xl': '2rem',
      },
      fontFamily: {
        'body-lg': jakarta,
        'headline-md': manrope,
        'body-sm': jakarta,
        'label-lg': jakarta,
        'label-md': jakarta,
        'body-md': jakarta,
        'headline-lg': manrope,
        'display-xl': manrope,
        'headline-lg-mobile': manrope,
        'label-eyebrow': jakarta,
        'headline-sm': manrope,
        'display-xl-mobile': manrope,
        // Defaults, so unclassed text still gets the right face.
        sans: jakarta,
        display: manrope,
      },
      fontSize: {
        'body-lg': ['18px', { lineHeight: '30px', fontWeight: '400' }],
        'headline-md': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.04em', fontWeight: '600' }],
        'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'headline-lg': ['40px', { lineHeight: '48px', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-xl': ['56px', { lineHeight: '68px', letterSpacing: '-0.02em', fontWeight: '700' }],
        // The mockup ships this token with no font size at all, which makes the whole
        // declaration invalid and leaves mobile headings at body size. 30px restores the
        // step the 36px line-height was written for.
        'headline-lg-mobile': ['30px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'label-eyebrow': ['11px', { lineHeight: '14px', letterSpacing: '0.12em', fontWeight: '700' }],
        'headline-sm': ['20px', { lineHeight: '28px', letterSpacing: '-0.005em', fontWeight: '600' }],
        'display-xl-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.015em', fontWeight: '700' }],
      },
      boxShadow: {
        soft: '0 10px 35px rgba(11, 20, 22, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
