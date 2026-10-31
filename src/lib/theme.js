// Theme helpers. 'system' = no data-theme attribute, so CSS follows the device.

export const readTheme = () => {
  if (typeof document === 'undefined') return 'system'
  const t = document.documentElement.getAttribute('data-theme')
  return t === 'light' || t === 'dark' ? t : 'system'
}

export const applyTheme = (value) => {
  const root = document.documentElement
  if (value === 'system') root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', value)
  try {
    if (value === 'system') localStorage.removeItem('theme')
    else localStorage.setItem('theme', value)
  } catch {
    /* storage blocked: the choice still applies for this visit */
  }
}
