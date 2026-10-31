import { person } from '../data/portfolio'
import { Container } from './Section'

const Footer = () => (
  <footer className="border-t border-rule">
    <Container className="flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {person.name}</p>
      <a href="#top" className="link w-fit text-muted">
        Back to top
      </a>
    </Container>
  </footer>
)

export default Footer
