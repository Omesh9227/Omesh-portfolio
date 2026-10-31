import { FiArrowUpRight } from 'react-icons/fi'
import { codingProfiles, contestResults } from '../data/portfolio'
import Section from './Section'

const CompetitiveProgramming = () => (
  <Section
    id="competitive"
    title="Competitive programming"
    note="Algorithmic problem solving is how I sharpen my fundamentals."
  >
    <div className="grid gap-5 sm:grid-cols-2">
      {codingProfiles.map((p) => (
        <article key={p.platform} className="rounded-2xl border border-rule bg-surface p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-semibold text-ink">{p.platform}</h3>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1 text-[0.9rem] text-muted"
            >
              View profile <FiArrowUpRight aria-hidden />
            </a>
          </div>

          <p className="mt-5 flex items-baseline gap-3">
            <span className="text-[3.25rem] leading-none font-bold tracking-[-0.04em] text-ink">
              {p.rating}
            </span>
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[0.85rem] font-medium text-accent">
              {p.tier}
            </span>
          </p>
          <p className="mt-1.5 text-[0.88rem] text-muted">Contest rating</p>

          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-rule pt-5">
            {p.facts.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.8rem] leading-tight text-muted">{k}</dt>
                <dd className="mt-1 font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </div>

    <h3 className="mt-12 text-lg font-semibold text-ink">Contest results</h3>
    <ul className="mt-4 border-b border-rule">
      {contestResults.map((r) => (
        <li
          key={r.event}
          className="grid gap-x-6 gap-y-0.5 border-t border-rule py-3.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline"
        >
          <span className="text-ink">{r.event}</span>
          <span className="sm:text-right">
            <span className="font-semibold text-ink">{r.result}</span>
            {r.field && <span className="ml-1.5 text-muted">{r.field}</span>}
          </span>
        </li>
      ))}
    </ul>
  </Section>
)

export default CompetitiveProgramming
