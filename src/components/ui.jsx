// Shared layout pieces for the DevPro-style theme.

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 ${className}`}>{children}</div>
)

// Centered section title: first word white, second word green, short green underline.
export const SectionHeading = ({ id, lead, accent, sub }) => (
  <div data-reveal className="mb-12 text-center sm:mb-14">
    <h2 id={id} className="font-code text-3xl font-bold tracking-tight text-text sm:text-4xl">
      {lead} <span className="text-green">{accent}</span>
    </h2>
    <span aria-hidden className="heading-bar mx-auto mt-3 block h-1 w-16 rounded-full bg-green" />
    {sub && <p className="mx-auto mt-5 max-w-2xl text-muted">{sub}</p>}
  </div>
)

// Full-width band. `tone` alternates the background like the template.
export const Band = ({ id, tone = 'panel', className = '', children, labelledBy }) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    className={`relative py-20 sm:py-24 ${
      tone === 'deep' ? 'border-y border-line bg-bg-deep' : 'bg-panel/40'
    } ${className}`}
  >
    {children}
  </section>
)

// Terminal / editor window chrome
export const WindowChrome = ({ title, className = '' }) => (
  <div className={`flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5 ${className}`}>
    <span aria-hidden className="size-3 rounded-full bg-[#ff5f57]" />
    <span aria-hidden className="size-3 rounded-full bg-[#febc2e]" />
    <span aria-hidden className="size-3 rounded-full bg-[#28c840]" />
    {title && (
      <span className="flex-1 truncate pr-12 text-center font-code text-[0.72rem] text-faint">{title}</span>
    )}
  </div>
)

export const Chips = ({ items, className = '' }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Technologies">
    {items.map((t) => (
      <li key={t} className="chip">
        {t}
      </li>
    ))}
  </ul>
)
