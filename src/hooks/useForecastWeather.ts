import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface DataResponse {
  city: string
  temp: string
  wind: string
  description: string
}

export const useForecastWeather = (city: string) => {
  const [data, setData] = useState<DataResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { i18n } = useTranslation()

  const getWeather = async () => {
    setLoading(true)

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
        import.meta.env.VITE_API_KEY
      }&lang=${i18n.language}`
    )

    const res = await response.json()

    if (res?.cod === 200) {
      const city = res.name
      const temp = (res['main']['temp'] - 273.15).toFixed() + '°C'
      const wind = res['wind']['speed'] + ' m/s'
      const description = res['weather'][0]['description']

      setData({ city, temp, wind, description })
      setError(null)
    } else {
      const errorMessage = city
        ? 'response.error.not_valid'
        : 'response.error.empty'
      setError(errorMessage)
      setData(null)
    }

    setLoading(false)
  }

  return { data, error, loading, getWeather }
}
