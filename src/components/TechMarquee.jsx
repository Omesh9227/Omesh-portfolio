import { FaAws, FaJava } from 'react-icons/fa6'
import {
  SiApachekafka,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiJenkins,
  SiJunit5,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const tech = [
  ['Java', FaJava, '#f89820'],
  ['Spring Boot', SiSpringboot, '#6db33f'],
  ['Apache Kafka', SiApachekafka, 'currentColor'],
  ['PostgreSQL', SiPostgresql, '#699eca'],
  ['AWS', FaAws, '#ff9900'],
  ['Docker', SiDocker, '#2496ed'],
  ['Kubernetes', SiKubernetes, '#326ce5'],
  ['React', SiReact, '#61dafb'],
  ['MongoDB', SiMongodb, '#47a248'],
  ['Jenkins', SiJenkins, '#d33833'],
  ['JUnit', SiJunit5, '#25a162'],
  ['C++', SiCplusplus, '#659ad2'],
  ['Python', SiPython, '#3776ab'],
  ['TypeScript', SiTypescript, '#3178c6'],
  ['Node.js', SiNodedotjs, '#5fa04e'],
  ['MySQL', SiMysql, '#4479a1'],
  ['Tailwind CSS', SiTailwindcss, '#38bdf8'],
  ['Git', SiGit, '#f05032'],
]

const Row = ({ hidden }) => (
  <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
    {tech.map(([name, Icon, color]) => (
      <li key={name} className="flex items-center gap-2.5 text-[0.92rem] whitespace-nowrap text-text/75 transition-colors hover:text-text">
        <Icon aria-hidden className="text-lg" style={{ color }} />
        {name}
      </li>
    ))}
  </ul>
)

const TechMarquee = () => (
  <section aria-label="Technologies I work with" className="marquee relative overflow-hidden border-y border-line bg-panel/60">
    <div className="marquee-track flex w-max py-5">
      <Row />
      <Row hidden />
    </div>
    <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent" />
    <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent" />
  </section>
)

export default TechMarquee
