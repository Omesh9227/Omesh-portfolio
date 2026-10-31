import {
  FaArrowUpRightFromSquare,
  FaBasketShopping,
  FaCartShopping,
  FaCircleCheck,
  FaGithub,
  FaListCheck,
  FaRegCircle,
} from 'react-icons/fa6'
import { githubRepos, projects } from '../data/portfolio'
import EcommerceDiagram from './EcommerceDiagram'
import GroceryDiagram from './GroceryDiagram'
import { Band, Chips, Container, SectionHeading } from './ui'

const icons = {
  'E-Commerce Platform': FaCartShopping,
  'DSA Tracker': FaListCheck,
  'Grocery Shopping Optimizer': FaBasketShopping,
}

const Media = ({ project }) => {
  if (project.diagram === 'ecommerce') {
    return (
      <div className="flex items-center justify-center border-b border-line bg-bg-deep p-4 sm:p-6 lg:h-full lg:border-r lg:border-b-0">
        <EcommerceDiagram />
      </div>
    )
  }
  if (project.diagram === 'grocery') {
    return (
      <div className="flex aspect-[16/10] items-center justify-center border-b border-line bg-bg-deep p-4 sm:p-6">
        <GroceryDiagram />
      </div>
    )
  }
  return (
    <a
      href={project.demo || project.code}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title}`}
      className="group block aspect-[16/10] overflow-hidden border-b border-line bg-bg-deep"
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </a>
  )
}

const Links = ({ p }) => (
  <div className="flex flex-wrap gap-2">
    {p.code && (
      <a href={p.code} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code on GitHub`} className="icon-btn">
        <FaGithub aria-hidden />
      </a>
    )}
    {p.demo && (
      <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`} className="icon-btn">
        <FaArrowUpRightFromSquare aria-hidden className="text-sm" />
      </a>
    )}
  </div>
)

const Title = ({ p }) => {
  const Icon = icons[p.title] || FaGithub
  return (
    <h3 className="flex items-center gap-2.5 font-code text-lg font-bold text-text">
      <Icon aria-hidden className="shrink-0 text-green" />
      {p.title}
    </h3>
  )
}

// Wide card for the flagship project: diagram beside the write-up and roadmap.
const FeaturedProject = ({ p }) => (
  <li className="card overflow-hidden transition-colors hover:border-green/50 md:col-span-2">
    <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <Media project={p} />
      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip border-yellow/40 text-yellow">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-yellow opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-yellow" />
            </span>
            {p.status}
          </span>
          <span className="chip border-green/40 text-green">Featured</span>
        </div>
        <div className="mt-4">
          <Title p={p} />
        </div>
        <p className="mt-3 text-muted">{p.summary}</p>
        <p className="mt-2 text-sm text-faint">{p.details}</p>

        {p.roadmap && (
          <>
            <p className="mt-6 mb-2.5 font-code text-[0.8rem] text-yellow">Roadmap</p>
            <ol className="space-y-1.5 text-[0.93rem]">
              {p.roadmap.map((r) => (
                <li key={r.step} className="flex items-center gap-2.5">
                  {r.done ? (
                    <FaCircleCheck aria-hidden className="shrink-0 text-green" />
                  ) : (
                    <FaRegCircle aria-hidden className="shrink-0 text-faint" />
                  )}
                  <span className={r.done ? 'text-text' : 'text-muted'}>
                    {r.step}
                    <span className="sr-only">{r.done ? ' (done)' : ' (planned)'}</span>
                  </span>
                </li>
              ))}
            </ol>
          </>
        )}

        <Chips items={p.tech} className="mt-6" />
        <div className="mt-auto pt-6">
          <Links p={p} />
        </div>
      </div>
    </div>
  </li>
)

const Projects = () => (
  <Band id="projects" labelledBy="projects-title">
    <Container>
      <SectionHeading
        id="projects-title"
        lead="My"
        accent="Projects"
        sub="Things I’ve built outside work to learn, practise and solve my own problems."
      />

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) =>
          p.featured ? (
            <FeaturedProject key={p.title} p={p} />
          ) : (
            <li key={p.title} className="card flex flex-col overflow-hidden transition-colors hover:border-green/50">
              <Media project={p} />
              <div className="flex flex-1 flex-col p-6">
                <Title p={p} />
                <p className="mt-3 text-muted">{p.summary}</p>
                <p className="mt-2 text-sm text-faint">{p.details}</p>
                <Chips items={p.tech} className="mt-5" />
                <div className="mt-auto pt-6">
                  <Links p={p} />
                </div>
              </div>
            </li>
          )
        )}
      </ul>

      <div className="mt-12 text-center">
        <a href={githubRepos} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <FaGithub aria-hidden /> View All Repositories
        </a>
      </div>
    </Container>
  </Band>
)

export default Projects
