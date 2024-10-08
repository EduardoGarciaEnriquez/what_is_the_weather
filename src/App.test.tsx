import React, { act } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import App from './App'

let data: null | {
  city: string
  temp: string
  wind: string
  description: string
} = null
let loading: boolean = false
let error: string | null = null

const mockGetWeather = vi.fn()

vi.mock('./hooks/useForecastWeather', () => ({
  useForecastWeather: () => ({
    data,
    error,
    loading,
    getWeather: mockGetWeather,
  }),
}))

describe('App', () => {
  beforeEach(() => {
    data = null
    loading = false
    error = null
  })

  it('renders the component', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'En' }))

    expect(
      screen.getByRole('heading', { level: 1, name: "What's the weather" })
    )

    expect(
      screen.getByRole('img', { name: 'toggle theme' }).parentElement
    ).toHaveClass('toggle-theme')

    expect(
      screen.getByRole('searchbox', {
        name: /enter the name of the city:/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /search/i,
      })
    ).toBeInTheDocument()
  })

  describe('when is loading', () => {
    beforeEach(() => {
      loading = true
    })

    it('renders a loader', () => {
      render(<App />)

      expect(screen.getByText(/Loading/i)).toBeInTheDocument()
    })

    it('disables input and button', () => {
      render(<App />)

      expect(
        screen.getByRole('searchbox', {
          name: /enter the name of the city:/i,
        })
      ).toHaveAttribute('disabled')

      expect(
        screen.getByRole('button', {
          name: /search/i,
        })
      ).toHaveAttribute('disabled')
    })
  })

  describe('when it is not loading', () => {
    describe('when there is data', () => {
      it('displays alert with info className', () => {
        data = {
          city: 'city name',
          description: 'weather description',
          temp: '23 ºC',
          wind: '0 m/s',
        }

        render(<App />)

        expect(screen.getByTestId('alert-badge')).toHaveClass(/info/i)

        expect(screen.getByText(/city name/i)).toBeInTheDocument()
        expect(screen.getByText(/weather description/i)).toBeInTheDocument()
        expect(screen.getByText(/23 .C/i)).toBeInTheDocument()
        expect(screen.getByText(/0 m\/s/i)).toBeInTheDocument()
      })
    })

    describe('when there is an error', () => {
      it('displays alert with warning className', () => {
        error = 'Error message'

        render(<App />)

        expect(screen.getByText(error).parentElement).toHaveClass(/warning/i)
      })
    })
  })

  describe('when we  click on submit', () => {
    it('calls getTheWeather()', () => {
      render(<App />)

      fireEvent.click(screen.getByRole('button', { name: /search/i }))

      expect(mockGetWeather).toHaveBeenCalled()
    })
  })

  describe('when input text changes', () => {
    it('saves the value', () => {
      const setStateMock = vi.fn()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const useStateMock: any = (useState: any) => [useState, setStateMock]

      vi.spyOn(React, 'useState').mockImplementationOnce(useStateMock)

      render(<App />)

      const input = screen.getByRole('searchbox', {
        name: /enter the name of the city:/i,
      })

      act(() => fireEvent.change(input, { target: { value: 'New York' } }))

      expect(setStateMock).toHaveBeenCalledWith('New York')
    })
  })
})
