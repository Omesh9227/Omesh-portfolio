import { community, experience } from '../data/portfolio'
import Section from './Section'

const Tags = ({ items }) => (
  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
    {items.map((t) => (
      <li key={t} className="tag">
        {t}
      </li>
    ))}
  </ul>
)

const Experience = () => (
  <Section id="experience" title="Experience">
    <ol className="space-y-12">
      {experience.map((job) => (
        <li key={job.company} className="grid gap-x-8 gap-y-2 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
          <p className="pt-1 text-[0.92rem] text-muted">{job.period}</p>

          <div className="max-w-[64ch]">
            <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">{job.company}</h3>

            {job.roles.length > 1 ? (
              <ol className="mt-3 border-l border-rule" aria-label="Roles held">
                {job.roles.map((r, i) => (
                  <li key={r.title} className="relative pb-2.5 pl-5 last:pb-0">
                    <span
                      aria-hidden
                      className={`absolute top-[0.6rem] -left-[4.5px] size-2 rounded-full ${
                        i === 0 ? 'bg-accent' : 'border border-faint bg-bg'
                      }`}
                    />
                    <span className={i === 0 ? 'font-medium text-ink' : 'text-muted'}>{r.title}</span>
                    <span className="ml-2 text-[0.88rem] whitespace-nowrap text-faint">{r.period}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-1 font-medium text-ink/90">{job.roles[0].title}</p>
            )}

            <ul className="mt-5 space-y-2.5">
              {job.points.map((p) => (
                <li key={p} className="relative pl-5 text-ink/90">
                  <span aria-hidden className="absolute top-[0.72em] left-0 h-px w-2.5 bg-faint" />
                  {p}
                </li>
              ))}
            </ul>

            <Tags items={job.tech} />
          </div>
        </li>
      ))}
    </ol>

    <div className="mt-16 border-t border-rule pt-10">
      <h3 className="text-lg font-semibold text-ink">Leadership and community</h3>
      <ul className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-3">
        {community.map((c) => (
          <li key={c.org}>
            <p className="font-medium text-ink">
              {c.link ? (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="link">
                  {c.title}
                </a>
              ) : (
                c.title
              )}
            </p>
            <p className="text-[0.95rem] text-ink/80">{c.org}</p>
            <p className="mt-0.5 text-[0.88rem] text-faint">{c.period}</p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{c.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </Section>
)

export default Experience
