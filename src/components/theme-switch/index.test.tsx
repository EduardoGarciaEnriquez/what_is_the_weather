import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Switch from '.'

let theme = 'light'
const mockHandleChange = vi.fn()

vi.mock('../../hooks/useTheme', () => ({
  useTheme: () => ({ theme, handleChange: mockHandleChange }),
}))

describe('ThemeSwitch', () => {
  beforeEach(() => {
    theme = 'light'
  })

  it('renders the component', () => {
    render(<Switch />)

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'toggle theme')
  })

  describe('when is clicked', () => {
    it('calls handleChange', () => {
      render(<Switch />)

      fireEvent.click(screen.getByRole('img', { name: 'toggle theme' }))

      expect(mockHandleChange).toHaveBeenCalled()
    })
  })

  describe('when theme is dark', () => {
    it('renders a sun icon', () => {
      theme = 'dark'
      render(<Switch />)

      expect(screen.getByRole('img', { name: 'toggle theme' })).toHaveAttribute(
        'src',
        '/what_is_the_weather/src/assets/sun.svg'
      )
    })
  })

  describe('when theme is light', () => {
    it('renders a moon icon', () => {
      render(<Switch />)

      expect(screen.getByRole('img', { name: 'toggle theme' })).toHaveAttribute(
        'src',
        '/what_is_the_weather/src/assets/moon.svg'
      )
    })
  })
})
