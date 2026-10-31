import { FiArrowUpRight } from 'react-icons/fi'
import { certifications } from '../data/portfolio'
import Section from './Section'

const Certifications = () => (
  <Section id="certifications" title="Certifications">
    <ul className="-mt-4">
      {certifications.map((c) => (
        <li key={c.title} className="border-t border-rule first:border-t-0">
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-1 py-4 sm:grid-cols-[minmax(0,1fr)_3.5rem_1.25rem]"
          >
            <span>
              <span className="font-medium text-ink transition-colors group-hover:text-accent">{c.title}</span>
              <span className="mt-0.5 block text-[0.92rem] text-muted">
                {c.issuer}. {c.detail}
              </span>
            </span>
            <span className="pt-0.5 text-right text-[0.92rem] text-muted">{c.year}</span>
            <FiArrowUpRight
              aria-hidden
              className="mt-1 hidden text-faint transition-colors group-hover:text-accent sm:block"
            />
            <span className="sr-only">(opens credential in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  </Section>
)

export default Certifications
