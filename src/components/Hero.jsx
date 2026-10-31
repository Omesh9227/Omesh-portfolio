import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { education, person, socials } from '../data/portfolio'
import { Container } from './Section'
import TraceCard from './TraceCard'

const github = socials.find((s) => s.label === 'GitHub')
const linkedin = socials.find((s) => s.label === 'LinkedIn')

const facts = [
  ['Currently', `${person.role.replace('Associate Software Development Engineer', 'ASDE')}, ${person.company}`],
  ['Based in', person.location.replace(', Haryana', '')],
  ['Studied', education.school.replace('National Institute of Technology', 'NIT')],
]

const Hero = () => (
  <section id="top" aria-label="Introduction">
    <Container className="pt-12 pb-16 sm:pt-20 sm:pb-24">
      <h1 className="text-[clamp(2.5rem,10.5vw,8.75rem)] leading-[0.92] font-bold tracking-[-0.045em] text-ink">
        {person.name}
      </h1>

      <div className="mt-10 grid items-start gap-12 sm:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <p className="max-w-[36ch] text-pretty text-[1.35rem] leading-[1.45] tracking-[-0.01em] text-ink sm:text-[1.55rem]">
            {person.intro}
          </p>

          <dl className="mt-8 grid max-w-md gap-2.5 text-[0.95rem]">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3">
                <dt className="text-muted">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href={github.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FiGithub aria-hidden /> GitHub
            </a>
            <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FiLinkedin aria-hidden /> LinkedIn
            </a>
          </div>
        </div>

        <TraceCard />
      </div>
    </Container>
  </section>
)

export default Hero
