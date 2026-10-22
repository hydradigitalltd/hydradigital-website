import areYeDancinLogo from '../../logos/are-ye-dancin-logo.webp'
import berthaParkLogo from '../../logos/bertha-park-logo.webp'
import healthOnWorkLogo from '../../logos/health-on-work-logo.webp'
import pinchShot from '../../logos/pinch-dumpling-counter-shot.webp'
import plumbShot from '../../logos/plumb-deep-diving-shot.webp'
import slabworksShot from '../../logos/slabworks-shot.webp'

// Existing clients carried over from the main homepage portfolio, then the
// animated concept demos. Demos use a page screenshot (`shot`) instead of a logo.
export type Client = {
  badge: string
  title: string
  subtitle: string
  description: string
  logo?: string
  shot?: string
  link: string | null
  linkLabel: string | null
}

export const clients: Client[] = [
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
  {
    badge: 'Concept demo',
    title: 'Plumb Deep Diving',
    subtitle: 'Dive school and expedition company',
    description:
      'A scroll-driven site that descends from the surface to the midnight zone, with a live depth gauge, courses, kit and dive planning. A demo of what an animated site can do for a diving school.',
    shot: plumbShot,
    link: 'https://plumb-deep-diving.preview.hydradigital.co.uk',
    linkLabel: 'View the demo',
  },
  {
    badge: 'Concept demo',
    title: 'Slabworks',
    subtitle: 'Warehouse techno club',
    description:
      'A raw, high-energy nightclub site with a glitching dithered hero, a weekly line-up, rooms, guestlist and ticketing. A demo for venues that want the website to feel like the night out.',
    shot: slabworksShot,
    link: 'https://slabworks.preview.hydradigital.co.uk',
    linkLabel: 'View the demo',
  },
  {
    badge: 'Concept demo',
    title: 'Pinch Dumpling Counter',
    subtitle: 'Late-night dumpling and noodle takeaway',
    description:
      'A bold, playful takeaway site with an animated hero, a menu with a basket, delivery checker and live opening hours. A demo for takeaways that want direct orders without the app fees.',
    shot: pinchShot,
    link: 'https://pinch-dumpling-counter.preview.hydradigital.co.uk',
    linkLabel: 'View the demo',
  },
]
