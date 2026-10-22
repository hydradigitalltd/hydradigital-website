import areYeDancinLogo from '../../logos/are-ye-dancin-logo.webp'
import blockchainTokenSniperLogo from '../../logos/blockchain-token-sniper-logo.webp'
import healthOnWorkLogo from '../../logos/health-on-work-logo.webp'

// Existing clients, carried over from the main homepage portfolio.
export const clients = [
  {
    badge: 'Web Application',
    title: 'HealthOnWork',
    subtitle: 'Occupational health and workplace wellbeing reports',
    description:
      'A digital platform for an occupational health provider, combining lead generation, client onboarding and online assessment workflows, with report generation for employers, employees and practitioners.',
    logo: healthOnWorkLogo,
    link: 'https://healthonwork.com',
    linkLabel: 'Visit healthonwork.com',
  },
  {
    badge: 'Bespoke software',
    title: 'BlockchainTokenSniper',
    subtitle: 'Automated cryptocurrency trading and portfolio management',
    description:
      'A cloud-hosted trading platform for buying, selling and monitoring crypto assets across multiple blockchain networks through a Telegram interface, with wallet management, subscription billing and referrals.',
    logo: blockchainTokenSniperLogo,
    link: null,
    linkLabel: null,
  },
  {
    badge: 'Website and booking system',
    title: "Are Ye Dancin'",
    subtitle: 'Ceilidh band and DJ act, Perth',
    description:
      'A public booking site backed by a private admin system. Customers check a date and enquire online; the owner confirms from a secure admin area, raises Stripe deposit invoices, and bookings sync to Google Calendar so a date is never double-booked.',
    logo: areYeDancinLogo,
    link: 'https://areyedancin.co.uk',
    linkLabel: 'Visit areyedancin.co.uk',
  },
]
