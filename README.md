# Omesh Mandavi — Portfolio

Personal portfolio site for Omesh Mandavi, software engineer at Publicis Sapient.

Built with React 19, Vite and Tailwind CSS v4. Single page, dark terminal-style theme (inspired by the DevPro template), self-hosted Inter and Fira Code fonts, no animation library.

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
  data/portfolio.js        all site content
  components/
    ui.jsx                 shared pieces: Container, SectionHeading, Band, WindowChrome, Chips
    Navbar.jsx             fixed header, scroll-spy, mobile menu
    Hero.jsx               intro, typing roles, laptop terminal, code window, sticky notes
    TechMarquee.jsx        scrolling tech-stack strip
    About.jsx              profile card, Who I Am, My Toolbox
    Experience.jsx         work timeline and community roles
    Projects.jsx           project cards (GroceryDiagram.jsx draws the architecture)
    Cta.jsx                "Ready to Collaborate?" band
    Coding.jsx             LeetCode / CodeChef cards and contest log
    Certifications.jsx
    Contact.jsx            EmailJS contact form and contact details
    Footer.jsx             footer and back-to-top button
  index.css                colour tokens and shared styles
```

## Theming

Colours are CSS variables at the top of `src/index.css` (`--bg`, `--panel`, `--green`, …), exposed to Tailwind as `bg-bg`, `bg-panel`, `text-green` and so on. Change `--green` to re-colour the whole accent.

## Contact form

The form posts through [EmailJS](https://www.emailjs.com/) using the service, template and public key in `src/components/Contact.jsx`. The template should accept `name`, `email` and `message`.
