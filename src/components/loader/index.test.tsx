import { describe, expect, it } from 'vitest'
import { screen, render } from '@testing-library/react'

import Loader from '.'

describe('Loader', () => {
  it('renders a component', () => {
    render(<Loader />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
