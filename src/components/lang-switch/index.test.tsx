import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import LangSwitch from '.'

const mockChangeLanguage = vi.fn()

vi.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      i18n: {
        changeLanguage: mockChangeLanguage,
      },
    }
  },
}))

describe('LangSwitch', () => {
  it('renders the component', () => {
    render(<LangSwitch />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  describe('when is clicked', () => {
    it('changes lang', () => {
      render(<LangSwitch />)

      fireEvent.click(screen.getByRole('button'))

      expect(mockChangeLanguage).toHaveBeenCalled()
    })
  })
})
