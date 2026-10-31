import { FaDesktop, FaMoon, FaSun } from 'react-icons/fa6'
import { applyTheme } from '../lib/theme'

// 'system' follows the device setting; 'light' / 'dark' are remembered choices.
const options = [
  { value: 'system', label: 'Match device', Icon: FaDesktop },
  { value: 'light', label: 'Light theme', Icon: FaSun },
  { value: 'dark', label: 'Dark theme', Icon: FaMoon },
]

// Controlled: the parent owns `theme` so every copy of the switch stays in sync.
const ThemeSwitch = ({ theme, onChange, className = '' }) => {
  const choose = (value) => {
    applyTheme(value)
    onChange(value)
  }

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={`inline-flex items-center gap-0.5 rounded-full border border-line bg-panel-2 p-0.5 ${className}`}
    >
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => choose(value)}
          aria-pressed={theme === value}
          aria-label={label}
          title={label}
          className={`grid size-8 place-items-center rounded-full text-[0.8rem] transition-colors ${
            theme === value ? 'bg-green text-green-ink' : 'text-muted hover:text-text'
          }`}
        >
          <Icon aria-hidden />
        </button>
      ))}
    </div>
  )
}

export default ThemeSwitch
