import { FaArrowUpRightFromSquare, FaBasketShopping, FaGithub, FaListCheck } from 'react-icons/fa6'
import { githubRepos, projects } from '../data/portfolio'
import GroceryDiagram from './GroceryDiagram'
import { Band, Chips, Container, SectionHeading } from './ui'

const icons = {
  'DSA Tracker': FaListCheck,
  'Grocery Shopping Optimizer': FaBasketShopping,
}

const Media = ({ project }) => {
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
        {projects.map((p) => {
          const Icon = icons[p.title] || FaGithub
          return (
            <li key={p.title} className="card flex flex-col overflow-hidden transition-colors hover:border-green/50">
              <Media project={p} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="flex items-center gap-2.5 font-code text-lg font-bold text-white">
                  <Icon aria-hidden className="text-green" />
                  {p.title}
                </h3>
                <p className="mt-3 text-muted">{p.summary}</p>
                <p className="mt-2 text-sm text-faint">{p.details}</p>
                <Chips items={p.tech} className="mt-5" />

                <div className="mt-auto flex gap-2 pt-6">
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source code on GitHub`}
                      className="icon-btn"
                    >
                      <FaGithub aria-hidden />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="icon-btn"
                    >
                      <FaArrowUpRightFromSquare aria-hidden className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          )
        })}
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
