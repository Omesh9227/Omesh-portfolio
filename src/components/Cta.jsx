import { FaPaperPlane } from 'react-icons/fa6'
import { Container } from './ui'

const loop = ['Design', 'Build', 'Test', 'Ship']

const Cta = () => (
  <section aria-labelledby="cta-title" className="relative overflow-hidden border-y border-line bg-bg-deep py-20 sm:py-24">
    <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
    <div
      aria-hidden
      className="pointer-events-none absolute top-1/2 left-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl"
      style={{ background: 'var(--purple)' }}
    />
    <Container className="relative text-center">
      <h2 id="cta-title" className="font-code text-3xl font-bold text-text sm:text-5xl">
        Ready to <span className="text-green">Collaborate?</span>
      </h2>
      <span aria-hidden className="mx-auto mt-4 block h-1 w-16 rounded-full bg-green" />
      <p className="mx-auto mt-6 max-w-xl text-muted sm:text-lg">
        Whether it’s a backend role, a side project or a tricky problem, I’d like to hear about it.
      </p>

      <ol className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-3 font-code text-sm sm:text-base">
        {loop.map((w, i) => (
          <li key={w} className="flex items-center gap-3">
            <span className="rounded-lg border border-line-2 bg-panel px-4 py-2 text-text">
              <span className="text-green">{i + 1}.</span> {w}
            </span>
            {i < loop.length - 1 && (
              <span aria-hidden className="text-faint">
                →
              </span>
            )}
          </li>
        ))}
        <li aria-hidden className="text-green">
          ↺
        </li>
      </ol>

      <a href="#contact" className="btn btn-green mt-10">
        <FaPaperPlane aria-hidden /> Get in Touch
      </a>
    </Container>
  </section>
)

export default Cta
