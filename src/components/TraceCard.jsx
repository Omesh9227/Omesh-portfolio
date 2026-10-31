// A distributed-trace waterfall (like Jaeger / Zipkin) of a request moving
// through a Spring Boot microservice stack. Bars grow in sequence on load.

const TOTAL = 212 // ms

const spans = [
  { service: 'api-gateway', op: 'POST /claims', start: 0, end: 212, depth: 0, tone: 'var(--span-1)' },
  { service: 'auth-service', op: 'verify JWT', start: 8, end: 31, depth: 1, tone: 'var(--span-2)' },
  { service: 'claims-service', op: 'createClaim', start: 36, end: 198, depth: 1, tone: 'var(--span-2)' },
  { service: 'postgres', op: 'INSERT claims', start: 52, end: 118, depth: 2, tone: 'var(--span-3)' },
  { service: 'kafka', op: 'publish event', start: 124, end: 151, depth: 2, tone: 'var(--span-3)' },
  { service: 'notify-service', op: 'consume event', start: 158, end: 207, depth: 1, tone: 'var(--span-async)' },
]

const ticks = [0, 50, 100, 150, 200]
const STEP = 150 // ms between rows

const TraceCard = () => (
  <figure
    className="overflow-hidden rounded-2xl border border-rule bg-surface"
    style={{ boxShadow: 'var(--shadow)' }}
  >
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-rule px-4 py-3 sm:px-5">
      <p className="font-mono text-[0.8rem] font-medium text-ink">POST /api/v1/claims</p>
      <p className="flex items-center gap-3 font-mono text-[0.75rem]">
        <span
          className="trace-done flex items-center gap-1.5 text-ok"
          style={{ animationDelay: `${spans.length * STEP + 500}ms` }}
        >
          <span aria-hidden className="size-1.5 rounded-full bg-ok" />
          201 Created
        </span>
        <span className="text-muted">{TOTAL} ms</span>
      </p>
    </div>

    <div className="px-4 pt-3 pb-4 sm:px-5">
      {/* Time axis */}
      <div className="grid grid-cols-[8rem_minmax(0,1fr)_2.25rem] gap-3 sm:grid-cols-[10rem_minmax(0,1fr)_2.75rem]">
        <span />
        <div className="relative h-4 font-mono text-[0.65rem] text-faint" aria-hidden>
          {ticks.map((t) => (
            <span
              key={t}
              className="absolute -translate-x-1/2 first:translate-x-0"
              style={{ left: `${(t / TOTAL) * 100}%` }}
            >
              {t}
            </span>
          ))}
        </div>
        <span />
      </div>

      <ol className="mt-1" aria-label="Spans in this request">
        {spans.map((s, i) => {
          const left = (s.start / TOTAL) * 100
          const width = ((s.end - s.start) / TOTAL) * 100
          return (
            <li
              key={s.service}
              className="trace-row grid grid-cols-[8rem_minmax(0,1fr)_2.25rem] items-center gap-3 py-[0.45rem] sm:grid-cols-[10rem_minmax(0,1fr)_2.75rem]"
              style={{ animationDelay: `${i * STEP}ms` }}
            >
              <div className="min-w-0" style={{ paddingLeft: `${s.depth * 0.7}rem` }}>
                <p className="truncate font-mono text-[0.72rem] leading-tight text-ink sm:text-[0.76rem]">
                  {s.service}
                </p>
                <p className="truncate text-[0.7rem] leading-tight text-muted sm:text-[0.74rem]">{s.op}</p>
              </div>

              <div className="relative h-5 rounded-[4px]">
                {/* gridlines */}
                {ticks.map((t) => (
                  <span
                    key={t}
                    aria-hidden
                    className="absolute inset-y-[-0.45rem] w-px bg-rule/70"
                    style={{ left: `${(t / TOTAL) * 100}%` }}
                  />
                ))}
                <span
                  className="trace-bar absolute inset-y-0 rounded-[4px]"
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    background: s.tone,
                    animationDelay: `${i * STEP + 60}ms`,
                  }}
                />
              </div>

              <span className="text-right font-mono text-[0.7rem] text-muted">
                {s.end - s.start}
              </span>
            </li>
          )
        })}
      </ol>
    </div>

    <figcaption className="border-t border-rule px-4 py-3 text-[0.8rem] leading-snug text-muted sm:px-5">
      A sample trace of an expense claim moving through a Spring Boot microservice stack, the kind of
      system I build at work.
    </figcaption>
  </figure>
)

export default TraceCard
