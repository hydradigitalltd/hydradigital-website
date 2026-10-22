import areYeDancinLogo from '../../logos/are-ye-dancin-logo.webp'
import berthaParkLogo from '../../logos/bertha-park-logo.webp'
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
    badge: 'Community website',
    title: 'Bertha Park Residents Group',
    subtitle: 'Residents group, Perth',
    description:
      'A fast, easy-to-run website for a residents group, with news, events and community information in one place, plus a contact route for residents and a content system the committee can update themselves.',
    logo: berthaParkLogo,
    link: 'https://berthapark.org.uk',
    linkLabel: 'Visit berthapark.org.uk',
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
