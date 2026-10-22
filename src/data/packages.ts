// Placeholder package pricing and feature matrix for the SMB redesign.
// Prices are per month. Hydra is not VAT registered yet, so none are quoted with VAT.

export type PlanId = 'starter' | 'growth' | 'pro'

export type Plan = {
  id: PlanId
  name: string
  tagline: string
  price: number | null // null means "Custom", quoted per client
  popular?: boolean
  highlights: string[]
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'A proper website, hosted and looked after.',
    price: 30,
    highlights: [
      'Custom-designed website',
      'Hosting, SSL and security included',
      'Domain and business email setup',
      'Basic on-page SEO',
      'Google Business Profile setup',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Get found, get enquiries, get bookings.',
    price: 90,
    popular: true,
    highlights: [
      'Edit it yourself with the CMS',
      'Online booking and card payments',
      'Simple CRM for every lead and customer',
      'Monthly SEO and Google Business Profile management',
      'Monthly performance report',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Marketing and admin running on autopilot.',
    price: null,
    highlights: [
      'Full e-commerce option',
      'Google, Meta and ChatGPT Ads management (ad spend separate)',
      'Social media management, 12 posts a month',
      'AI phone assistant, 60 mins included*',
      'Custom integrations with the tools you already use',
    ],
  },
]

// A cell is true (included), false (not included) or text such as "30 min".
export type Cell = boolean | string

export type FeatureRow = { label: string; hint?: string; values: [Cell, Cell, Cell] }
export type FeatureGroup = { heading: string; rows: FeatureRow[] }

export const featureGroups: FeatureGroup[] = [
  {
    heading: 'The basics',
    rows: [
      { label: 'Custom-designed website', values: [true, true, true] },
      { label: 'Mobile-ready and fast', values: [true, true, true] },
      { label: 'Hosting, SSL and daily backups', values: [true, true, true] },
      { label: 'Domain and business email setup', values: [true, true, true] },
      { label: 'Contact and enquiry forms', values: [true, true, true] },
      { label: 'GDPR and cookie compliance', values: [true, true, true] },
    ],
  },
  {
    heading: 'Manage your own content',
    rows: [
      { label: 'CMS, edit text and images yourself', values: [false, true, true] },
      { label: 'Blog and news posts', values: [false, true, true] },
      { label: 'Online shop (e-commerce)', values: [false, false, true] },
    ],
  },
  {
    heading: 'Bookings, payments and customers',
    rows: [
      { label: 'Online booking system', values: [false, true, true] },
      { label: 'Online payments and deposits', values: [false, true, true] },
      { label: 'CRM, leads and customer records', values: [false, true, true] },
      { label: 'Automatic email and SMS reminders', values: [false, false, true] },
      { label: 'Custom integrations', values: [false, false, 'On request'] },
    ],
  },
  {
    heading: 'Getting found',
    rows: [
      { label: 'On-page SEO setup', values: [true, true, true] },
      { label: 'Ongoing monthly SEO', values: [false, true, true] },
      { label: 'Google Business Profile setup', values: [true, true, true] },
      { label: 'Google Business Profile management', values: [false, true, true] },
      { label: 'Google Ads management', values: [false, false, true] },
      { label: 'Meta Ads management (Facebook and Instagram)', values: [false, false, true] },
      { label: 'ChatGPT Ads management', values: [false, false, true] },
      { label: 'Social media management', values: [false, false, '12 posts a month'] },
      { label: 'Review requests', values: [false, true, true] },
    ],
  },
  {
    heading: 'Automation',
    rows: [
      { label: 'AI phone assistant (inbound calls)', values: [false, false, '60 mins included*'] },
      { label: 'Missed-call text back', values: [false, true, true] },
      { label: 'Call summaries sent to your inbox', values: [false, false, true] },
    ],
  },
  {
    heading: 'Results and support',
    rows: [
      { label: 'Monthly performance report', values: [false, true, true] },
      { label: 'Analytics dashboard', values: [false, true, true] },
    ],
  },
]

export const minutesNote = '* Additional AI phone minutes are billed at a custom rate agreed with the client.'

export const solutions: { title: string; body: string }[] = [
  { title: 'Websites', body: 'Fast, mobile-ready sites built to turn visitors into enquiries.' },
  { title: 'Hosting', body: 'Secure UK-grade hosting, SSL, backups and updates handled for you.' },
  { title: 'Booking systems', body: 'Let customers book and reschedule themselves, day or night.' },
  { title: 'Payment systems', body: 'Take cards, deposits and invoices online with no chasing.' },
  { title: 'CRM', body: 'Every lead and customer in one place, with follow-ups that happen.' },
  { title: 'CMS', body: 'Change your own text, prices and photos in minutes, no developer needed.' },
  { title: 'Custom integrations', body: 'Connect your site to accounting, stock, email and the tools you already use.' },
  { title: 'SEO', body: 'Show up when local customers search for what you do.' },
  { title: 'Google Ads', body: 'Managed campaigns that spend your budget on calls, not clicks.' },
  { title: 'ChatGPT Ads', body: 'Get your business in front of people asking ChatGPT, with campaigns we set up and manage.' },
  { title: 'Meta Ads', body: 'Facebook and Instagram campaigns that put your offer in front of local customers.' },
  { title: 'Google Business Profile', body: 'Keep your Maps listing accurate, active and collecting reviews.' },
  { title: 'Social media', body: 'Regular, on-brand posts so your pages never go quiet.' },
  { title: 'AI phone assistant', body: 'Every call answered, questions handled, bookings taken, 24/7.' },
]

export const steps: { title: string; body: string }[] = [
  { title: 'Free chat', body: 'A 20 minute call about your business, your customers and what is not working.' },
  { title: 'We build it', body: 'You send us the basics. We design, build and set everything up, usually within a few days.' },
  { title: 'We run it', body: 'One monthly price. We host, update, report and keep improving it.' },
]

export const faqs: { q: string; a: string }[] = [
  { q: 'Is there a setup fee?', a: 'No. The package price covers the build. There is a 6 month minimum term, then it rolls monthly.' },
  { q: 'Who owns the website?', a: 'You do. After the minimum term the finished site is yours to keep, and we will hand it over on request.' },
  { q: 'Can I move between packages?', a: 'Yes. Upgrade at any time and the change starts immediately. Downgrades take effect at the next billing date.' },
  { q: 'Do I need to write the content?', a: 'Not unless you want to. Send us what you have and we will shape it. Full copywriting is available as an add-on.' },
  { q: 'What does the AI phone assistant do?', a: 'It answers calls to your business number, answers common questions, takes messages and bookings, and sends you a summary. Calls it cannot handle are passed to you.' },
  { q: 'Is ad spend included?', a: 'No. The package covers managing your Google, Meta (Facebook and Instagram) and ChatGPT campaigns. You pay each platform directly for clicks and impressions, so you always control the budget.' },
  { q: 'Can you build something custom?', a: 'Yes. If you need bespoke software or a mobile app, we quote it separately. See our bespoke software service.' },
  { q: 'What if I already have a website?', a: 'We can rebuild it, or keep it and add the bookings, CRM, SEO and marketing around it.' },
]
