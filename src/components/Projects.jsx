import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { githubRepos, projects } from '../data/portfolio'
import GroceryDiagram from './GroceryDiagram'
import Section from './Section'

const Media = ({ project }) => {
  if (project.diagram === 'grocery') {
    return (
      <figure className="rounded-2xl border border-rule bg-surface p-4 sm:p-5">
        <GroceryDiagram />
        <figcaption className="mt-3 text-[0.8rem] text-muted">System overview</figcaption>
      </figure>
    )
  }
  return (
    <a
      href={project.demo || project.code}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-rule bg-surface"
      aria-label={`Open ${project.title}`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </a>
  )
}

const Projects = () => (
  <Section id="projects" title="Projects" note="Selected personal work. More on GitHub.">
    <ul className="space-y-16">
      {projects.map((p) => (
        <li key={p.title} className="grid items-start gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-10">
          <Media project={p} />

          <div>
            <h3 className="text-[1.45rem] font-semibold tracking-[-0.015em] text-ink">{p.title}</h3>
            <p className="mt-3 text-ink/90">{p.summary}</p>
            <p className="mt-3 text-[0.95rem] text-muted">{p.details}</p>

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
              {p.tech.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live demo <FiArrowUpRight aria-hidden />
                </a>
              )}
              {p.code && (
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <FiGithub aria-hidden /> Source code
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>

    <p className="mt-14 border-t border-rule pt-6 text-[0.95rem] text-muted">
      See every repository on{' '}
      <a href={githubRepos} target="_blank" rel="noopener noreferrer" className="link">
        github.com/Omesh9227
      </a>
      .
    </p>
  </Section>
)

export default Projects
