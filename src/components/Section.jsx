export const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-[72rem] px-5 sm:px-8 ${className}`}>{children}</div>
)

// Résumé-style section: heading in a left column on wide screens, content on the right.
const Section = ({ id, title, note, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="border-t border-rule">
    <Container className="grid gap-x-14 gap-y-8 py-16 sm:py-20 lg:grid-cols-[13rem_minmax(0,1fr)]">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-[-0.015em] text-ink">
          {title}
        </h2>
        {note && <p className="mt-2 max-w-[28ch] text-[0.95rem] leading-relaxed text-muted">{note}</p>}
      </div>
      <div className="min-w-0">{children}</div>
    </Container>
  </section>
)

export default Section
