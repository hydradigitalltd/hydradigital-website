import { useState } from 'react'
import type { FormEvent } from 'react'
import { faqs, minutesNote, featureGroups, plans, solutions, steps } from './data/packages'
import type { Cell, PlanId } from './data/packages'
import { clients } from './data/clients'
import './smb.css'

const formDefaults = { name: '', email: '', phone: '', company: '', website: '', details: '' }

function Tick({ value }: { value: Cell }) {
  if (typeof value === 'string') return <span className="smb-cell-text">{value}</span>
  return value ? (
    <span className="smb-tick" role="img" aria-label="Included">
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ) : (
    <span className="smb-cross" role="img" aria-label="Not included">
      -
    </span>
  )
}

function SmbHome() {
  const [yearly, setYearly] = useState(false)
  const [formData, setFormData] = useState(formDefaults)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  const shown = (price: number | null) => {
    if (price === null) return 'Custom'
    return `£${Math.round(yearly ? (price * 10) / 12 : price)}`
  }

  const choosePlan = (id: PlanId) => {
    const name = plans.find((plan) => plan.id === id)?.name
    setFormData((current) =>
      current.details.trim() ? current : { ...current, details: `I am interested in the ${name} package.\n\n` },
    )
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim()) {
      setFormState('error')
      setFormMessage('Please complete your name, email address, and message.')
      return
    }
    setFormState('loading')
    setFormMessage('Sending your enquiry...')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const contentType = response.headers.get('content-type') || ''
      const data = contentType.includes('application/json')
        ? ((await response.json()) as { message?: string })
        : { message: 'The contact form is not available here. Please email contact@hydradigital.co.uk directly.' }
      if (!response.ok) throw new Error(data.message || 'Unable to send your enquiry right now.')
      setFormState('success')
      setFormMessage(data.message || 'Thanks - your enquiry has been sent.')
      setFormData(formDefaults)
    } catch (error) {
      setFormState('error')
      setFormMessage(error instanceof Error ? error.message : 'Something went wrong while sending your enquiry.')
    }
  }

  const field = (key: keyof typeof formDefaults) => ({
    value: formData[key],
    onChange: (event: { target: { value: string } }) =>
      setFormData((current) => ({ ...current, [key]: event.target.value })),
  })

  return (
    <main className="smb">
      <section className="smb-hero">
        <div className="container">
          <span className="eyebrow">Digital services for small business</span>
          <h1>
            Your website, bookings, payments and marketing.
            <span className="smb-hero-accent"> One monthly price.</span>
          </h1>
          <p className="smb-lede">
            We build, host and run everything your business needs online, so you can get on with running the business.
            No setup fee, and the finished website is yours to keep.
          </p>
          <div className="smb-hero-actions">
            <a className="button button-primary" href="#packages">See packages</a>
            <a className="button button-secondary" href="#contact">Book a free chat</a>
          </div>
          <ul className="smb-hero-words" aria-label="What you get">
            {['fast', 'secure', 'found', 'bookable', 'automated', 'maintained'].map((word) => (
              <li key={word}>{word}.</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What we do</span>
            <h2>Everything a growing business needs, under one roof</h2>
            <p>Stop juggling five suppliers. Pick a package and we handle the lot.</p>
          </div>
          <div className="smb-solutions">
            {solutions.map((item) => (
              <article className="smb-solution" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section soft-section" id="packages">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Packages</span>
            <h2>Simple monthly packages. Pick one and grow into the next.</h2>
          </div>

          <div className="smb-switches">
            <div className="smb-switch" role="group" aria-label="Billing period">
              <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>Monthly</button>
              <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>Yearly</button>
              <span className="smb-switch-note">2 months free on yearly</span>
            </div>
          </div>

          <div className="smb-plans">
            {plans.map((plan, index) => (
              <article className={`smb-plan${plan.popular ? ' is-popular' : ''}`} key={plan.id}>
                {plan.popular && <span className="smb-badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <p className="smb-plan-tag">{plan.tagline}</p>
                <p className="smb-price">
                  <strong>{shown(plan.price)}</strong>
                  <span>{plan.price === null ? 'priced to fit your business' : `per month${yearly ? ', billed yearly' : ''}`}</span>
                </p>
                <p className="smb-terms">No setup fee. 6 month minimum term.</p>
                <p className="smb-includes">{index === 0 ? 'Includes:' : `Everything in ${plans[index - 1].name}, plus:`}</p>
                <ul>
                  {plan.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className={`button ${plan.popular ? 'button-primary' : 'button-secondary'}`} href="#contact" onClick={() => choosePlan(plan.id)}>
                  Choose {plan.name}
                </a>
              </article>
            ))}
          </div>
          <p className="smb-footnote">{minutesNote}</p>
          <p className="smb-custom">
            Need something bigger, like bespoke software or a mobile app?{' '}
            <a href="/services/bespoke-software">Talk to us about a custom build</a>.
          </p>
        </div>
      </section>

      <section className="content-section" id="compare">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Compare</span>
            <h2>Compare every feature</h2>
          </div>
          <div className="smb-table-wrap" tabIndex={0} role="region" aria-label="Package comparison, scrolls sideways on small screens">
            <table className="smb-table">
              <thead>
                <tr>
                  <th scope="col"><span className="visually-hidden">Feature</span></th>
                  {plans.map((plan) => (
                    <th scope="col" key={plan.id} className={plan.popular ? 'is-popular' : undefined}>
                      <span className="smb-th-name">{plan.name}</span>
                      <span className="smb-th-price">{plan.price === null ? 'Custom' : `${shown(plan.price)}/mo`}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              {featureGroups.map((group) => (
                <tbody key={group.heading}>
                  <tr className="smb-group">
                    <th colSpan={4} scope="colgroup">{group.heading}</th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      {row.values.map((value, i) => (
                        <td key={plans[i].id} className={plans[i].popular ? 'is-popular' : undefined}>
                          <Tick value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
              <tfoot>
                <tr>
                  <th scope="row"><span className="visually-hidden">Choose a package</span></th>
                  {plans.map((plan) => (
                    <td key={plan.id} className={plan.popular ? 'is-popular' : undefined}>
                      <a className={`button ${plan.popular ? 'button-primary' : 'button-secondary'}`} href="#contact" onClick={() => choosePlan(plan.id)}>
                        {plan.name}
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="smb-footnote">{minutesNote}</p>
        </div>
      </section>

      <section className="content-section soft-section" id="how">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How it works</span>
            <h2>Live in days, not weeks</h2>
          </div>
          <ol className="smb-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="smb-step-num">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-section" id="work">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our clients</span>
            <h2>A snapshot of what we've built</h2>
          </div>
          <div className="portfolio-grid">
            {clients.map((item) => (
              <article className="surface-card portfolio-card" key={item.title}>
                <div className="portfolio-logo" aria-hidden="true">
                  <img src={item.logo} alt="" width="256" height="256" loading="lazy" decoding="async" />
                </div>
                <span className="portfolio-badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p className="portfolio-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
                {item.link ? (
                  <a className="text-link" href={item.link} target="_blank" rel="noreferrer">
                    {item.linkLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="faq">
        <div className="container smb-faq">
          <div className="section-heading">
            <span className="eyebrow">Q&amp;A</span>
            <h2>Questions small business owners ask</h2>
          </div>
          <div>
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="container smb-contact">
          <div className="section-heading">
            <span className="eyebrow">Get started</span>
            <h2>Tell us about your business</h2>
            <p>Free, no-obligation chat. We typically reply within a few hours.</p>
            <p>
              <a href="mailto:contact@hydradigital.co.uk">contact@hydradigital.co.uk</a>
              <br />
              <a href="tel:+447459876609">+44 7459 876609</a>
              {' · '}
              <a href="https://wa.me/447459876609" target="_blank" rel="noreferrer">WhatsApp</a>
            </p>
          </div>
          <form className="contact-form surface-card" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label><span>Name</span><input type="text" name="name" autoComplete="name" required {...field('name')} /></label>
              <label><span>Email</span><input type="email" name="email" autoComplete="email" required {...field('email')} /></label>
              <label><span>Phone</span><input type="tel" name="phone" placeholder="Optional" autoComplete="tel" {...field('phone')} /></label>
              <label><span>Business</span><input type="text" name="company" autoComplete="organization" {...field('company')} /></label>
              <label className="full-width visually-hidden" aria-hidden="true">
                <span>Website</span>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" {...field('website')} />
              </label>
              <label className="full-width">
                <span>Message</span>
                <textarea name="details" rows={6} placeholder="What do you do, and what would you like help with?" required {...field('details')} />
              </label>
            </div>
            <div className="form-footer">
              <button className="button button-primary" type="submit" disabled={formState === 'loading'}>
                {formState === 'loading' ? 'Sending...' : 'Send message'}
              </button>
              <p className={`form-message ${formState}`}>{formMessage}</p>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default SmbHome
