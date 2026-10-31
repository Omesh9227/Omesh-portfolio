import { useEffect, useState } from 'react'
import { FaArrowUp, FaCode, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { nav, person, socials } from '../data/portfolio'
import { Container } from './ui'

const quick = ['GitHub', 'LinkedIn', 'LeetCode']
const quickIcons = { GitHub: FaGithub, LinkedIn: FaLinkedin, LeetCode: SiLeetcode }

const Footer = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="border-t border-line bg-bg-deep">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5 font-code text-lg font-bold text-text">
            <FaCode aria-hidden className="text-green" /> {person.name}
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Backend engineer building Spring Boot microservices. Competitive programmer on the side.
          </p>
          <ul className="mt-5 flex gap-2.5">
            {socials
              .filter((s) => quick.includes(s.label))
              .map((s) => {
                const Icon = quickIcons[s.label]
                return (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="icon-btn">
                      <Icon aria-hidden />
                    </a>
                  </li>
                )
              })}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-code text-sm font-bold text-text">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm md:grid-cols-1">
            {nav.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-muted hover:text-green">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-code text-sm font-bold text-text">Say Hello</h2>
          <p className="mt-4 text-sm break-all text-muted select-all">{person.email}</p>
          <p className="mt-1 text-sm text-muted">{person.location}</p>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-1 py-5 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <p className="font-code">
            Built with React <span className="text-green">+</span> Tailwind CSS
          </p>
        </Container>
      </div>

      <a
        href="#home"
        aria-label="Back to top"
        className={`fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-green/60 bg-panel text-green shadow-lg shadow-[var(--shadow)] transition-all duration-200 hover:bg-green hover:text-green-ink ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <FaArrowUp aria-hidden />
      </a>
    </footer>
  )
}

export default Footer
