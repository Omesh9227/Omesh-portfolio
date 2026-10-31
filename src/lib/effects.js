// Page effects: scroll reveals and the cursor spotlight on cards.
// Returns a cleanup function for React's useEffect.

export const initEffects = () => {
  const root = document.documentElement
  root.classList.add('js')

  // Reveal [data-reveal] elements once as they scroll into view
  const targets = document.querySelectorAll('[data-reveal]')
  let observer
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          el.classList.add('is-visible')
          observer.unobserve(el)
          // Once the reveal has finished, drop the reveal styles so the
          // element's own hover effects (like the card lift) take over.
          const delay = parseFloat(getComputedStyle(el).getPropertyValue('--d')) || 0
          setTimeout(() => {
            el.removeAttribute('data-reveal')
            el.classList.remove('is-visible')
          }, 700 + delay)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    targets.forEach((el) => observer.observe(el))
  } else {
    targets.forEach((el) => el.classList.add('is-visible'))
  }

  // Spotlight: tell the hovered card where the cursor is
  const onMove = (e) => {
    const card = e.target instanceof Element ? e.target.closest('.spotlight') : null
    if (!card) return
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  window.addEventListener('pointermove', onMove, { passive: true })

  return () => {
    observer?.disconnect()
    window.removeEventListener('pointermove', onMove)
  }
}
