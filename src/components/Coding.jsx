import { FaArrowUpRightFromSquare, FaTrophy } from 'react-icons/fa6'
import { SiCodechef, SiLeetcode } from 'react-icons/si'
import { codingProfiles, contestResults } from '../data/portfolio'
import { Band, Container, SectionHeading, WindowChrome } from './ui'

const brand = {
  LeetCode: { Icon: SiLeetcode, color: '#ffa116' },
  CodeChef: { Icon: SiCodechef, color: '#c8a27a' },
}

const Coding = () => (
  <Band id="coding" labelledBy="coding-title">
    <Container>
      <SectionHeading
        id="coding-title"
        lead="Competitive"
        accent="Programming"
        sub="Algorithmic problem solving keeps my fundamentals sharp."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {codingProfiles.map((p, i) => {
          const { Icon, color } = brand[p.platform]
          return (
            <article key={p.platform} data-reveal style={{ "--d": `${i * 110}ms` }} className="card lift spotlight p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="flex items-center gap-3 font-code text-lg font-bold text-text">
                  <Icon aria-hidden className="text-2xl" style={{ color }} />
                  {p.platform}
                </h3>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-green"
                >
                  View profile <FaArrowUpRightFromSquare aria-hidden className="text-xs" />
                </a>
              </div>

              <div className="mt-6 flex items-end gap-3">
                <p className="font-code text-5xl leading-none font-bold text-green">{p.rating}</p>
                <span className="chip mb-1 border-yellow/40 text-yellow">{p.tier}</span>
              </div>
              <p className="mt-2 text-sm text-muted">Contest rating</p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                {p.facts.map(([k, v]) => (
                  <div key={k} className="flex flex-col-reverse rounded-xl border border-line bg-panel-2 px-3 py-3">
                    <dt className="mt-1 text-[0.72rem] leading-tight text-muted">{k}</dt>
                    <dd className="font-code font-bold text-text">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          )
        })}
      </div>

      <div data-reveal className="mt-6 overflow-hidden rounded-xl border border-line-2 bg-panel">
        <WindowChrome title="contest_results.log" />
        <ul className="divide-y divide-line font-code text-[0.85rem]">
          {contestResults.map((r) => (
            <li key={r.event} className="flex flex-col gap-1 px-5 py-3.5 transition-colors hover:bg-panel-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <span className="flex items-start gap-3 text-text">
                <FaTrophy aria-hidden className="mt-1 shrink-0 text-xs text-yellow" />
                {r.event}
              </span>
              <span className="pl-6 whitespace-nowrap sm:pl-0">
                <span className="font-bold text-green">{r.result}</span>
                {r.field && <span className="ml-1.5 text-faint">{r.field}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </Band>
)

export default Coding
