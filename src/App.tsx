import React, { SetStateAction } from 'react'
import { useForecastWeather } from './hooks/useForecastWeather'
import { useTheme } from './hooks/useTheme'

import moonIcon from './assets/moon.svg'
import sunIcon from './assets/sun.svg'
import Alert from './components/alert'
import Loader from './components/loader'

import './App.css'

export const Switch = () => {
  const { theme, handleChange } = useTheme()

  return (
    <button onClick={handleChange} className="toggle-theme">
      <img src={theme === 'dark' ? sunIcon : moonIcon} alt="toggle theme" />
    </button>
  )
}

function App() {
  const [city, setCity] = React.useState<string>('')

  const { data, error, loading, getWeather } = useForecastWeather(city)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    getWeather()
  }

  const handleOnChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCity(e.target.value)
  }

  const displayError = error && !loading
  const displayData = data && !loading

  return (
    <>
      <header>
        <h1>What's the weather</h1>
        <Switch />
      </header>
      <form>
        <label htmlFor="city">Enter the name of the city:</label>
        <input
          type="search"
          className="form-control"
          id="city"
          placeholder="Search city or postal code"
          name="city"
          value={city}
          onChange={handleOnChange}
          disabled={loading}
        />

        <button
          disabled={loading}
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>

        {displayData && (
          <Alert role="info">
            <>
              <span>
                The weather in {data.city} is currently {data.description}.
              </span>
              <span>The temperature is {data.temp}</span>
              <span>The wind speed is {data.wind}</span>
            </>
          </Alert>
        )}

        {displayError && (
          <Alert role="warning">
            <span>{error}</span>
          </Alert>
        )}

        {loading && <Loader />}
      </form>
    </>
  )
}

export default App
