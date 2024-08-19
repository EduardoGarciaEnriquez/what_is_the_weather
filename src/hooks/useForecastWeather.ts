import { useState } from 'react'

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

  const getWeather = async () => {
    setLoading(true)

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${import.meta.env.VITE_API_KEY}`
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
        ? `"${city}" is not a valid input. Try with a different city.`
        : 'Input is empty, try writting a city name.'
      setError(errorMessage)
      setData(null)
    }

    setLoading(false)
  }

  return { data, error, loading, getWeather }
}
