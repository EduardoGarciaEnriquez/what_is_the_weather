import { act } from 'react'
import { describe, expect, it } from 'vitest'

import { renderHook } from '@testing-library/react'
import { useForecastWeather } from './useForecastWeather'

describe('useForecastWeather', () => {
  it('returns inital state', () => {
    const { result } = renderHook(useForecastWeather)

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBe(null)
    expect(result.current.loading).toBe(false)
  })

  describe('when is not a valid city name', () => {
    it('returns empty data and an error', async () => {
      const { result } = renderHook(useForecastWeather, {
        initialProps: 'not a city',
      })

      await act(async () => result.current.getWeather())

      expect(result.current.data).toBe(null)

      expect(result.current.error).toBe('response.error.not_valid')
    })
  })

  describe('when is city name is empty', () => {
    it('returns empty data and an error', async () => {
      const { result } = renderHook(useForecastWeather, {
        initialProps: '',
      })

      await act(async () => result.current.getWeather())

      expect(result.current.data).toBe(null)

      expect(result.current.error).toBe('response.error.empty')
    })
  })

  describe('when there is a valid city name', () => {
    it('returns the data', async () => {
      const { result } = renderHook(useForecastWeather, {
        initialProps: 'New York',
      })

      await act(async () => result.current.getWeather())

      expect(result.current.data?.city).toBe('New York')
      expect(result.current.data?.description).toBeTruthy()
      expect(result.current.data?.temp).toBeTruthy()
      expect(result.current.data?.wind).toBeTruthy()
    })
  })
})
