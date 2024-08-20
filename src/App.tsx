import React, { SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import { useForecastWeather } from './hooks/useForecastWeather'

import Alert from './components/alert'
import LangSwitch from './components/lang-switch'
import Loader from './components/loader'
import Switch from './components/theme-switch'

import './App.css'

function App() {
  const [city, setCity] = React.useState<string>('')

  const { data, error, loading, getWeather } = useForecastWeather(city)

  const { t } = useTranslation()

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
      <LangSwitch />
      <header>
        <h1>{t('title')}</h1>
        <Switch />
      </header>
      <form>
        <label htmlFor="city">{t('input.label')}</label>
        <input
          type="search"
          className="form-control"
          id="city"
          placeholder={t('input.placeholder')}
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
          {t('buttonTxt')}
        </button>

        {displayData && (
          <Alert role="info">
            <>
              <span>
                {t('response.weather', {
                  city: data.city,
                  description: data.description,
                })}
              </span>
              <span>{t('response.temp', { temp: data.temp })}</span>
              <span>{t('response.wind', { wind: data.wind })}</span>
            </>
          </Alert>
        )}

        {displayError && (
          <Alert role="warning">
            <span>{t(error, { city })}</span>
          </Alert>
        )}

        {loading && <Loader />}
      </form>
    </>
  )
}

export default App
