import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import { SiCodechef, SiLeetcode } from 'react-icons/si'
import { person, socials } from '../data/portfolio'
import { Band, Container, SectionHeading } from './ui'

// EmailJS public identifiers (safe to ship in client code)
const EMAILJS = {
  service: 'service_hkdfebf',
  template: 'template_slns86l',
  publicKey: 'XIB8LJfjbCcrcSlm2',
}

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  LeetCode: SiLeetcode,
  CodeChef: SiCodechef,
  X: FaXTwitter,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
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

  const info = [
    [FaEnvelope, 'Email', person.email, `mailto:${person.email}`],
    [FaPhone, 'Phone', person.phone, `tel:${person.phoneHref}`],
    [FaLocationDot, 'Location', person.location, null],
  ]

  return (
    <Band id="contact" labelledBy="contact-title">
      <Container>
        <SectionHeading
          id="contact-title"
          lead="Get In"
          accent="Touch"
          sub="Have a question or an opportunity? Send a message and I’ll reply by email."
        />

        <div className="card grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14 lg:p-10">
          {/* Form */}
          <div>
            <h3 className="mb-6 flex items-center gap-2.5 font-code text-lg font-bold text-white">
              <FaEnvelope aria-hidden className="text-green" /> Send a Message
            </h3>
            <form ref={form} onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="contact-name" className="text-sm font-medium text-text">
                    Name
                  </label>
                  <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className="field" />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="contact-email" className="text-sm font-medium text-text">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="field"
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="What would you like to talk about?"
                  className="field resize-y"
                />
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn btn-green w-full disabled:opacity-60">
                <FaPaperPlane aria-hidden /> {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              <p role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
                {status === 'sent' && (
                  <span className="flex items-center gap-2 text-green">
                    <FaCircleCheck aria-hidden /> Message sent. I’ll reply by email.
                  </span>
                )}
                {status === 'error' && (
                  <span className="flex items-start gap-2 text-muted">
                    <FaCircleExclamation aria-hidden className="mt-1 shrink-0 text-red" />
                    <span>
                      Couldn’t send the message. Try again, or email me at{' '}
                      <span className="text-text select-all">{person.email}</span>.
                    </span>
                  </span>
                )}
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="lg:border-l lg:border-line lg:pl-14">
            <h3 className="mb-6 font-code text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-5">
              {info.map(([Icon, label, value, href]) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-panel-2 text-green">
                    <Icon aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-faint">{label}</p>
                    {href ? (
                      <a href={href} className="break-all text-text hover:text-green">
                        {value}
                      </a>
                    ) : (
                      <p className="text-text">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 mb-4 font-code text-lg font-bold text-white">Connect with Me</h3>
            <ul className="flex flex-wrap gap-2.5">
              {socials.map((s) => {
                const Icon = socialIcons[s.label]
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="icon-btn"
                    >
                      <Icon aria-hidden />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Band>
  )
}

export default Contact
