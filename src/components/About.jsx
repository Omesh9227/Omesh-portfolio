import { FaCodeBranch, FaGithub, FaGraduationCap, FaLinkedin, FaToolbox, FaUser } from 'react-icons/fa6'
import { certifications, codingProfiles, education, person, skills, socials } from '../data/portfolio'
import { Band, Container, SectionHeading } from './ui'

const github = socials.find((s) => s.label === 'GitHub')
const linkedin = socials.find((s) => s.label === 'LinkedIn')
const leetcode = codingProfiles.find((p) => p.platform === 'LeetCode')

const stats = [
  [leetcode.facts[0][1], 'Problems solved'],
  [leetcode.rating, 'LeetCode rating'],
  [String(certifications.length), 'Certifications'],
]

const CardTitle = ({ icon: Icon, children }) => (
  <h3 className="mb-5 flex items-center gap-2.5 font-code text-lg font-bold text-text">
    <Icon aria-hidden className="text-green" />
    {children}
  </h3>
)

const About = () => (
  <Band id="about" labelledBy="about-title">
    <Container>
      <SectionHeading
        id="about-title"
        lead="About"
        accent="Me"
        sub="Backend engineer who likes clean services, well-tested code and a hard algorithm problem."
      />

      {/* Profile card */}
      <article className="card overflow-hidden">
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5 sm:px-6">
          <a href={github.href} target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-2.5 text-sm text-text hover:text-green">
            <FaGithub aria-hidden className="shrink-0 text-lg" />
            <span className="truncate font-code">github.com/{github.handle}</span>
          </a>
          <span className="flex shrink-0 items-center gap-2 text-xs text-muted">
            <span aria-hidden className="size-2 rounded-full bg-green" />
            {person.location.replace(', Haryana', '')}
          </span>
        </div>

        <div className="grid items-center gap-8 p-6 sm:p-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
          <div className="mx-auto aspect-square w-44 overflow-hidden rounded-2xl border-2 border-green/60 md:w-full">
            <img
              src={person.photo}
              alt={`Portrait of ${person.name}`}
              width="912"
              height="1169"
              loading="lazy"
              className="h-full w-full origin-[50%_22%] scale-[2.1] object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="font-code text-2xl font-bold text-white sm:text-3xl">{person.name}</p>
            <p className="mt-1 text-lg text-green">
              {person.role}, {person.company}
            </p>
            <p className="mt-4 max-w-[62ch] text-muted md:mx-0">{person.bio[0]}</p>

            <dl className="mt-6 grid grid-cols-3 gap-3 sm:max-w-md">
              {stats.map(([v, k]) => (
                <div key={k} className="flex flex-col-reverse justify-end rounded-xl border border-line bg-panel-2 px-3 py-3 text-center">
                  <dt className="mt-0.5 text-[0.72rem] leading-tight text-muted">{k}</dt>
                  <dd className="font-code text-xl font-bold text-green sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <a href={github.href} target="_blank" rel="noopener noreferrer" className="btn border border-line-2 bg-panel-2 text-text hover:border-green">
                <FaCodeBranch aria-hidden className="text-green" /> Visit GitHub
              </a>
              <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="btn border border-line-2 bg-panel-2 text-text hover:border-green">
                <FaLinkedin aria-hidden className="text-blue" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Who I am */}
        <article className="card p-6 sm:p-7">
          <CardTitle icon={FaUser}>Who I Am</CardTitle>
          <p className="text-muted">{person.bio[1]}</p>

          <div className="mt-6 flex gap-4 rounded-xl border border-line bg-panel-2 p-4">
            <FaGraduationCap aria-hidden className="mt-1 shrink-0 text-2xl text-green" />
            <div>
              <p className="font-semibold text-text">{education.school}</p>
              <p className="text-[0.95rem] text-muted">{education.degree}</p>
              <p className="mt-1 font-code text-xs text-faint">{education.years}</p>
            </div>
          </div>

          <p className="mt-6 mb-3 text-sm font-semibold text-text">Exploring now</p>
          <ul className="flex flex-wrap gap-2">
            {person.focus.map((f) => (
              <li key={f} className="chip border-green/40 text-green">
                {f}
              </li>
            ))}
          </ul>
        </article>

        {/* Toolbox */}
        <article className="card p-6 sm:p-7">
          <CardTitle icon={FaToolbox}>My Toolbox</CardTitle>
          <dl className="space-y-4">
            {skills.map(({ group, items }) => (
              <div key={group}>
                <dt className="mb-2 font-code text-[0.8rem] text-yellow">{group}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </Container>
  </Band>
)

export default About
