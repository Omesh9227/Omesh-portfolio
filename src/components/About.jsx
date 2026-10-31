import { education, person } from '../data/portfolio'
import Section from './Section'

const About = () => (
  <Section id="about" title="About">
    <div className="grid gap-10 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-12">
      <div className="aspect-[4/5] w-full max-w-[15rem] overflow-hidden rounded-2xl border border-rule bg-surface-2">
        <img
          src={person.photo}
          alt={`Portrait of ${person.name}`}
          width="912"
          height="1169"
          loading="lazy"
          className="h-full w-full origin-[50%_24%] scale-[1.75] object-cover"
        />
      </div>

      <div className="max-w-[62ch]">
        {person.bio.map((p) => (
          <p key={p.slice(0, 24)} className="mb-5 text-ink/90 last:mb-0">
            {p}
          </p>
        ))}

        <div className="mt-10 grid gap-8 border-t border-rule pt-8 sm:grid-cols-2">
          <div>
            <h3 className="text-[0.9rem] font-medium text-muted">Education</h3>
            <p className="mt-2 font-semibold text-ink">{education.school}</p>
            <p className="text-ink/90">{education.degree}</p>
            <p className="mt-0.5 text-[0.95rem] text-muted">{education.years}</p>
          </div>
          <div>
            <h3 className="text-[0.9rem] font-medium text-muted">Exploring now</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {person.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-rule px-3 py-1 text-[0.9rem] text-ink"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default About
