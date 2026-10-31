# Omesh Mandavi — Portfolio

Personal portfolio site for Omesh Mandavi, software engineer at Publicis Sapient.

Built with React 19, Vite and Tailwind CSS v4. Single page, terminal-style design (inspired by the DevPro template) with light and dark themes, self-hosted Inter and Fira Code fonts, no animation library.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Updating content

All text, links and lists live in **`src/data/portfolio.js`** — experience, projects, coding profiles, skills, certifications and social links. Components only handle layout, so most updates never touch JSX.

- **New project:** add an object to `projects` (set `featured: true`, `status` and `roadmap` for a wide card) with `title`, `summary`, `details`, `tech`, `code`, and either `image` (import it at the top of the file) or a `diagram`.
- **Promotion or new job:** edit `experience`. Multiple `roles` under one company render as a progression.
- **Ratings:** update `codingProfiles` and `contestResults`.

## Structure

```
src/
  data/portfolio.js        all site content
  components/
    ui.jsx                 shared pieces: Container, SectionHeading, Band, WindowChrome, Chips
    Navbar.jsx             fixed header, scroll-spy, mobile menu, theme switch
    Hero.jsx               intro, typing roles, laptop terminal, ContactController code window, sticky notes
    TechMarquee.jsx        scrolling tech-stack strip
    About.jsx              profile card, Who I Am, My Toolbox
    Experience.jsx         work timeline and community roles
    Projects.jsx           featured project + project cards (EcommerceDiagram.jsx, GroceryDiagram.jsx)
    Cta.jsx                "Ready to Collaborate?" band
    Coding.jsx             LeetCode / CodeChef cards and contest log
    Certifications.jsx
    Contact.jsx            EmailJS contact form and contact details
    Footer.jsx             footer and back-to-top button
  index.css                colour tokens and shared styles
```

## Theming

Colours are CSS variables at the top of `src/index.css`, exposed to Tailwind as `bg-bg`, `bg-panel`, `text-green` and so on.

- **Light** values live on `:root`; **dark** values apply when the device prefers dark, when the visitor picks dark, and always inside `.force-dark` (the hero terminal and code window).
- The header switch offers **Match device / Light / Dark**. A manual choice is saved in `localStorage`; "Match device" clears it. The small script in `index.html` applies the saved choice before the first paint, so there is no flash.
- Theme helpers are in `src/lib/theme.js`; the switch is `src/components/ThemeSwitch.jsx`.

## Contact form

The form posts through [EmailJS](https://www.emailjs.com/) using the service, template and public key in `src/components/Contact.jsx`. The template should accept `name`, `email` and `message`.
