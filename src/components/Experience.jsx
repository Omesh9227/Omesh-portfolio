import { FaArrowUpRightFromSquare, FaBriefcase, FaUsers } from 'react-icons/fa6'
import { community, experience } from '../data/portfolio'
import { Band, Chips, Container, SectionHeading } from './ui'

const Experience = () => (
  <Band id="experience" tone="deep" labelledBy="experience-title">
    <Container>
      <SectionHeading id="experience-title" lead="Work" accent="Experience" sub="Where I’ve built things so far." />

      <ol className="relative mx-auto max-w-4xl space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[1.1rem] before:w-px before:bg-line-2 sm:before:left-[1.35rem]">
        {experience.map((job) => (
          <li key={job.company} className="relative pl-12 sm:pl-16">
            <span
              aria-hidden
              className="absolute top-5 left-0 grid size-9 place-items-center rounded-full border border-green/60 bg-panel text-green sm:size-11"
            >
              <FaBriefcase className="text-sm sm:text-base" />
            </span>

            <article className="card p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="font-code text-xl font-bold text-text">{job.company}</h3>
                  <p className="text-sm text-muted">{job.location}</p>
                </div>
                <span className="chip border-green/40 font-code text-green">{job.period}</span>
              </div>

              {job.roles.length > 1 ? (
                <ol className="mt-5 space-y-2 border-l border-line-2 pl-4" aria-label="Roles held">
                  {job.roles.map((r, i) => (
                    <li key={r.title} className="relative">
                      <span
                        aria-hidden
                        className={`absolute top-[0.55rem] -left-[1.32rem] size-2.5 rounded-full ${
                          i === 0 ? 'bg-green shadow-[0_0_0_4px_rgb(63_185_80/0.2)]' : 'border border-faint bg-bg-deep'
                        }`}
                      />
                      <span className={i === 0 ? 'font-semibold text-green' : 'text-text/80'}>{r.title}</span>
                      <span className="ml-2 font-code text-xs whitespace-nowrap text-faint">{r.period}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-3 font-semibold text-green">{job.roles[0].title}</p>
              )}

              <ul className="mt-5 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-muted">
                    <span aria-hidden className="font-code text-green">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <Chips items={job.tech} className="mt-5" />
            </article>
          </li>
        ))}
      </ol>

      <h3 className="mt-16 mb-6 flex items-center justify-center gap-2.5 font-code text-xl font-bold text-text">
        <FaUsers aria-hidden className="text-green" /> Leadership &amp; Community
      </h3>
      <ul className="grid gap-5 md:grid-cols-3">
        {community.map((c) => (
          <li key={c.org} className="card flex flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-semibold text-text">{c.title}</p>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${c.title} certificate`}
                  className="mt-1 text-muted hover:text-green"
                >
                  <FaArrowUpRightFromSquare aria-hidden className="text-sm" />
                </a>
              )}
            </div>
            <p className="text-sm text-green">{c.org}</p>
            <p className="mt-0.5 font-code text-xs text-faint">{c.period}</p>
            <p className="mt-3 text-[0.93rem] text-muted">{c.text}</p>
          </li>
        ))}
      </ul>
    </Container>
  </Band>
)

export default Experience
