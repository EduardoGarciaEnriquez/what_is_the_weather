import { useTheme } from '../../hooks/useTheme'

import moonIcon from '../../assets/moon.svg'
import sunIcon from '../../assets/sun.svg'

import './style.css'

const Switch = () => {
  const { theme, handleChange } = useTheme()

  return (
    <button onClick={handleChange} className="toggle-theme">
      <img src={theme === 'dark' ? sunIcon : moonIcon} alt="toggle theme" />
    </button>
  )
}

export default Switch
