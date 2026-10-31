import { useEffect, useState } from 'react'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa6'
import { codingProfiles, education, person, socials } from '../data/portfolio'
import { Container, WindowChrome } from './ui'

const roles = ['Backend Engineer', 'Spring Boot Developer', 'Competitive Programmer', 'LeetCode Knight']

// Types each role out, pauses, deletes it, moves to the next.
const useTyped = (words) => {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    let w = 0
    let i = words[0].length
    let deleting = true
    let timer
    const tick = () => {
      let delay
      if (deleting) {
        i -= 1
        delay = 40
        if (i === 0) {
          deleting = false
          w = (w + 1) % words.length
          delay = 300
        }
      } else {
        i += 1
        delay = 80
        if (i === words[w].length) {
          deleting = true
          delay = 1800
        }
      }
      setText(words[w].slice(0, i))
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 3000)
    return () => clearTimeout(timer)
  }, [words])
  return text
}

const leetcode = codingProfiles.find((p) => p.platform === 'LeetCode')
const codechef = codingProfiles.find((p) => p.platform === 'CodeChef')

const info = [
  ['Role', `${person.role.replace('Associate Software Development Engineer', 'ASDE')}`],
  ['Company', person.company],
  ['Education', `B.Tech CSE, ${education.school.replace('National Institute of Technology', 'NIT')}`],
  ['Building', 'E-commerce, 16 services'],
  ['Stack', 'Java, Spring Boot, React'],
  ['Data', 'PostgreSQL, MongoDB, Kafka'],
  ['Cloud', 'AWS, Docker, Jenkins'],
  ['LeetCode', `${leetcode.rating} (${leetcode.tier})`],
  ['CodeChef', `${codechef.rating} (${codechef.tier})`],
]

const cup = String.raw`     ( (
      ) )
   ........
   |      |]
   \      /
    '----'`

const palette = ['#f85149', '#3fb950', '#e3b341', '#58a6ff', '#a371f7', '#39c5cf', '#e6edf3']

const Terminal = () => (
  <div className="overflow-hidden rounded-xl border border-line-2 bg-bg-deep text-left">
    <WindowChrome title="omesh@dev-workspace: ~" />
    <div className="flex gap-6 p-5 font-code text-[0.72rem] leading-relaxed sm:gap-8 sm:p-7 sm:text-[0.82rem]">
      <pre aria-hidden className="hidden shrink-0 text-green sm:block">
        {cup}
      </pre>
      <div className="min-w-0">
        <p>
          <span className="text-green">omesh</span>
          <span className="text-faint">@</span>
          <span className="text-green">dev-workspace</span>
        </p>
        <p aria-hidden className="text-faint">
          ---------------------
        </p>
        <dl>
          {info.map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <dt className="shrink-0 text-yellow">{k}:</dt>
              <dd className="truncate text-text">{v}</dd>
            </div>
          ))}
        </dl>
        <div aria-hidden className="mt-3 flex gap-1">
          {palette.map((c) => (
            <span key={c} className="h-3 w-5 rounded-sm" style={{ background: c }} />
          ))}
        </div>
        <p className="mt-4 text-muted">
          <span className="text-green">➜</span> <span className="text-blue">~</span> <span className="caret" />
        </p>
      </div>
    </div>
  </div>
)

const linkedin = socials.find((s) => s.label === 'LinkedIn')
const github = socials.find((s) => s.label === 'GitHub')

// Syntax colours for the snippet
const K = ({ children }) => <span className="text-red">{children}</span> // keyword
const A = ({ children }) => <span className="text-yellow">{children}</span> // annotation
const T = ({ children }) => <span className="text-orange">{children}</span> // type
const M = ({ children }) => <span className="text-purple">{children}</span> // method
const C = ({ children }) => <span className="text-faint italic">{children}</span> // comment
const S = ({ href, children }) =>
  href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-blue underline decoration-blue/40 underline-offset-2 hover:decoration-blue">
      "{children}"
    </a>
  ) : (
    <span className="text-blue">"{children}"</span>
  )

// A Spring Boot controller whose only job is to tell you how to reach me.
const CodeWindow = () => (
  <figure className="overflow-hidden rounded-xl border border-line-2 bg-panel text-left shadow-2xl shadow-[var(--shadow)]">
    <WindowChrome title="ContactController.java" />
    <pre className="overflow-x-auto p-4 font-code text-[0.64rem] leading-[1.65] text-text sm:text-[0.72rem] xl:text-[0.7rem]">
      <code>
        <A>@RestController</A>
        {'\n'}
        <A>@RequestMapping</A>(<S>/api/v1/omesh</S>)
        {'\n'}
        <K>public class</K> <T>ContactController</T> {'{'}
        {'\n\n'}
        {'  '}<C>// Got an idea or a role? Let’s talk.</C>
        {'\n'}
        {'  '}<A>@GetMapping</A>(<S>/contact</S>)
        {'\n'}
        {'  '}<K>public</K> <T>Contact</T> <M>reachOut</M>() {'{'}
        {'\n'}
        {'    '}<K>return</K> <T>Contact</T>.<M>builder</M>()
        {'\n'}
        {'        '}.<M>email</M>(<S href={`mailto:${person.email}`}>{person.email}</S>)
        {'\n'}
        {'        '}.<M>linkedIn</M>(<S href={linkedin.href}>{linkedin.handle}</S>)
        {'\n'}
        {'        '}.<M>gitHub</M>(<S href={github.href}>{github.handle}</S>)
        {'\n'}
        {'        '}.<M>location</M>(<S>{person.location.replace(', Haryana', '')}</S>)
        {'\n'}
        {'        '}.<M>build</M>();
        {'\n'}
        {'  }'}
        {'\n'}
        {'}'}
      </code>
    </pre>
    <figcaption className="flex items-center justify-between gap-3 border-t border-line bg-panel-2 px-4 py-2 font-code text-[0.68rem] text-faint">
      <span>
        <span className="text-green">GET</span> /api/v1/omesh/contact
      </span>
      <span className="text-green">200 OK</span>
    </figcaption>
  </figure>
)

const Note = ({ color, label, text, className }) => (
  <div
    className={`w-32 rounded-sm p-3 font-code text-[0.68rem] leading-snug text-[#1f2328] shadow-lg shadow-[var(--shadow)] ${className}`}
    style={{ background: color }}
  >
    <p className="font-bold">{label}</p>
    <p className="mt-1">{text}</p>
  </div>
)

const Hero = () => {
  const typed = useTyped(roles)

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pt-28 pb-20 sm:pt-32">
      {/* backdrop: grid + soft glows */}
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 size-[34rem] rounded-full blur-3xl"
        style={{ background: 'var(--purple)', opacity: 'var(--glow)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-40 size-[34rem] rounded-full blur-3xl"
        style={{ background: 'var(--green)', opacity: 'var(--glow)' }}
      />

      <Container className="relative text-center">
        <p className="text-lg font-semibold text-green sm:text-2xl">Hello World! I’m</p>
        <h1 className="mt-3 font-code text-[2.6rem] leading-tight font-bold tracking-tight text-text sm:text-6xl lg:text-7xl">
          {person.name}
        </h1>
        <p className="mt-4 font-code text-lg text-muted sm:text-2xl" aria-live="off">
          <span className="text-green">&gt;</span> <span className="text-text">{typed}</span>
          <span className="caret ml-1" />
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-muted sm:text-lg">{person.intro}</p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn btn-green">
            View Projects <FaArrowRight aria-hidden />
          </a>
          <a href="#contact" className="btn btn-outline">
            <FaEnvelope aria-hidden /> Contact Me
          </a>
        </div>

        {/* Laptop with terminal. The laptop and code window stay dark in both themes. */}
        <div className="relative mx-auto mt-14 max-w-3xl sm:mt-20">
          <div className="force-dark">
            <div className="rounded-t-2xl border-[5px] border-b-0 border-[#1c2128] bg-[#1c2128] shadow-2xl shadow-[var(--shadow)] sm:border-[10px] sm:border-b-0">
              <Terminal />
            </div>
            <div aria-hidden className="relative -mx-3 h-3.5 rounded-b-xl bg-gradient-to-b from-[#2d333b] to-[#1c2128] sm:-mx-10 sm:h-5">
              <span className="absolute top-0 left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-b-lg bg-[#3d444d] sm:w-24" />
            </div>
          </div>
          <div
            aria-hidden
            className="mx-auto h-1 w-[110%] -translate-x-[4.5%] rounded-full opacity-60 blur-md"
            style={{ background: 'linear-gradient(90deg, var(--purple), var(--green), var(--yellow))' }}
          />

          {/* In the flow below xl, overlapping the laptop on wide screens */}
          <div className="force-dark relative mx-auto mt-10 w-full max-w-md xl:absolute xl:-right-32 xl:-bottom-14 xl:mt-0 xl:w-[23rem] xl:max-w-none">
            <CodeWindow />
          </div>

          <div className="absolute top-10 -left-36 hidden -rotate-6 xl:block">
            <Note color="var(--note-yellow)" label="TODO:" text="System design deep dive" />
          </div>
          <div className="absolute top-44 -left-28 hidden rotate-3 xl:block">
            <Note color="var(--note-blue)" label="IDEA:" text="GenAI + microservices" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
