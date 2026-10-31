// Theme helpers. 'system' = no data-theme attribute, so CSS follows the device.

export const readTheme = () => {
  if (typeof document === 'undefined') return 'system'
  const t = document.documentElement.getAttribute('data-theme')
  return t === 'light' || t === 'dark' ? t : 'system'
}

export const applyTheme = (value) => {
  const root = document.documentElement
  // Fade colours instead of snapping (skipped for reduced motion)
  if (!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('theme-switching')
    clearTimeout(applyTheme.t)
    applyTheme.t = setTimeout(() => root.classList.remove('theme-switching'), 350)
  }
  if (value === 'system') root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', value)
  try {
    if (value === 'system') localStorage.removeItem('theme')
    else localStorage.setItem('theme', value)
  } catch {
    /* storage blocked: the choice still applies for this visit */
  }
}
