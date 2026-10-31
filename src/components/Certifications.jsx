import { FaArrowUpRightFromSquare, FaAws, FaCertificate } from 'react-icons/fa6'
import { certifications } from '../data/portfolio'
import { Band, Container, SectionHeading } from './ui'

const Certifications = () => (
  <Band id="certifications" tone="deep" labelledBy="certifications-title">
    <Container>
      <SectionHeading
        id="certifications-title"
        lead="My"
        accent="Certifications"
        sub="Courses and credentials, with links to verify each one."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => {
          const Icon = c.issuer === 'Amazon Web Services' ? FaAws : FaCertificate
          return (
            <li key={c.title} data-reveal style={{ "--d": `${(i % 4) * 80}ms` }}>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card lift spotlight group flex h-full flex-col p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-panel-2 text-xl text-green transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon aria-hidden />
                  </span>
                  <span className="chip font-code text-faint">{c.year}</span>
                </div>
                <p className="mt-4 font-semibold text-text group-hover:text-green">{c.title}</p>
                <p className="text-sm text-green/90">{c.issuer}</p>
                <p className="mt-2 text-sm text-muted">{c.detail}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-4 text-xs text-faint group-hover:text-green">
                  View credential <FaArrowUpRightFromSquare aria-hidden className="nudge-up text-[0.65rem]" />
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </Container>
  </Band>
)

export default Certifications
