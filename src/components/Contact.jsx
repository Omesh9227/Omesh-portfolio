import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { person, socials } from '../data/portfolio'
import Section from './Section'

// EmailJS public identifiers (safe to ship in client code)
const EMAILJS = {
  service: 'service_hkdfebf',
  template: 'template_slns86l',
  publicKey: 'XIB8LJfjbCcrcSlm2',
}

const Contact = () => {
  const form = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS.service, EMAILJS.template, form.current, { publicKey: EMAILJS.publicKey })
      form.current.reset()
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <Section id="contact" title="Contact" note="Questions, opportunities or a chat about backend engineering.">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-14">
        <div>
          <p className="text-[0.9rem] text-muted">Email</p>
          <a
            href={`mailto:${person.email}`}
            className="link mt-1 block text-[clamp(1.15rem,3.2vw,1.5rem)] font-semibold tracking-[-0.01em] break-all"
          >
            {person.email}
          </a>

          <dl className="mt-8 grid gap-4">
            <div>
              <dt className="text-[0.9rem] text-muted">Phone</dt>
              <dd>
                <a href={`tel:${person.phoneHref}`} className="link">
                  {person.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.9rem] text-muted">Location</dt>
              <dd className="text-ink">{person.location}</dd>
            </div>
          </dl>

          <p className="mt-8 text-[0.9rem] text-muted">Elsewhere</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-2 text-[0.97rem]">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="link">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form ref={form} onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-1.5">
              <span className="text-[0.92rem] font-medium text-ink">Name</span>
              <input name="name" type="text" required autoComplete="name" className="field" />
            </label>
            <label className="grid gap-1.5">
              <span className="text-[0.92rem] font-medium text-ink">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="field"
              />
            </label>
          </div>
          <label className="grid gap-1.5">
            <span className="text-[0.92rem] font-medium text-ink">Message</span>
            <textarea name="message" required rows={6} className="field resize-y" />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === 'sending'} className="btn btn-primary disabled:opacity-60">
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <p role="status" aria-live="polite" className="text-[0.92rem]">
              {status === 'sent' && (
                <span className="inline-flex items-center gap-1.5 text-ok">
                  <FiCheckCircle aria-hidden /> Message sent. I’ll reply by email.
                </span>
              )}
              {status === 'error' && (
                <span className="inline-flex items-start gap-1.5 text-muted">
                  <FiAlertCircle aria-hidden className="mt-1 shrink-0 text-ink" />
                  <span>
                    Couldn’t send the message. Try again, or email{' '}
                    <a href={`mailto:${person.email}`} className="link">
                      {person.email}
                    </a>
                    .
                  </span>
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}

export default Contact
