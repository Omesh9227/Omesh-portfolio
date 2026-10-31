# Omesh Mandavi — Portfolio

Personal portfolio site for Omesh Mandavi, software engineer at Publicis Sapient.

Built with React 19, Vite and Tailwind CSS v4. Single page, light and dark themes, self-hosted fonts, no animation library.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Updating content

All text, links and lists live in **`src/data/portfolio.js`** — experience, projects, coding profiles, skills, certifications and social links. Components only handle layout, so most updates never touch JSX.

- **New project:** add an object to `projects` with `title`, `summary`, `details`, `tech`, `code`, and either `image` (import it at the top of the file) or a `diagram`.
- **Promotion or new job:** edit `experience`. Multiple `roles` under one company render as a progression.
- **Ratings:** update `codingProfiles` and `contestResults`.

## Structure

```
src/
  data/portfolio.js          all site content
  components/
    Section.jsx              shared section layout (heading column + content)
    Navbar.jsx               sticky header, scroll-spy, theme toggle, mobile menu
    Hero.jsx, TraceCard.jsx  intro and the animated request-trace visual
    About.jsx
    Experience.jsx
    Projects.jsx, GroceryDiagram.jsx
    CompetitiveProgramming.jsx
    Skills.jsx
    Certifications.jsx
    Contact.jsx              EmailJS-powered contact form
    Footer.jsx
  index.css                  design tokens (light/dark) and base styles
```

## Theming

Colours are CSS variables defined in `src/index.css` and exposed to Tailwind as `bg-bg`, `text-ink`, `text-muted`, `border-rule`, `text-accent` and so on. The site follows the system theme until the visitor uses the toggle; the choice is remembered.

## Contact form

The form posts through [EmailJS](https://www.emailjs.com/) using the service, template and public key in `src/components/Contact.jsx`. The template should accept `name`, `email` and `message`.
