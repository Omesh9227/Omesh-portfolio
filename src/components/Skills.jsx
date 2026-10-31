import { skills } from '../data/portfolio'
import Section from './Section'

const Skills = () => (
  <Section id="skills" title="Skills">
    <dl>
      {skills.map(({ group, items }) => (
        <div
          key={group}
          className="grid gap-x-8 gap-y-3 border-t border-rule py-5 first:border-t-0 first:pt-0 sm:grid-cols-[9.5rem_minmax(0,1fr)]"
        >
          <dt className="pt-1 font-medium text-ink">{group}</dt>
          <dd>
            <ul className="flex flex-wrap gap-1.5">
              {items.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </Section>
)

export default Skills
