import { useState } from 'react'
import { useTheme } from './hooks/useTheme'

import sunIcon from './assets/sun.svg'
import moonIcon from './assets/moon.svg'

export const Switch = () => {
  const { theme, handleChange } = useTheme()

  return (
    <button onClick={handleChange} className="toggle-theme">
      <img src={theme === 'dark' ? sunIcon : moonIcon} alt="toggle theme" />
    </button>
  )
}

function App() {
  const [city, setCity] = useState<string>('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  return (
    <div className='container'>
      <header>
        <h1>What's the weather</h1>
        <Switch />
      </header>
      <form id="form">
        <label htmlFor="city">Enter the name of the city:</label>
        <input
          type="search"
          className="form-control"
          id="city"
          placeholder="Search city or postal code"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>

        <div id="weather" className="alert info">
          <span>The weather in Guadalajara is currently broken clouds.</span>
          <span>The temperature is 27°C</span>
          <span>The wind speed is 5.82 m/s</span>
        </div>
      </form>
    </div>
  )
}

export default App
