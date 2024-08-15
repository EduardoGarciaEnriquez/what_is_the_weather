import { describe, expect, it } from 'vitest'
import { screen, render } from '@testing-library/react'

import Alert, { IProps } from '.'
describe('Alert', () => {
  const mountComponent = ({ role, children }: IProps) => {
    render(<Alert role={role}>{children}</Alert>)
  }

  const mockProps: IProps = {
    role: 'info',
    children: <>children</>,
  }

  it('renders the component', () => {
    mountComponent(mockProps)

    expect(screen.getByTestId('alert-badge')).toBeInTheDocument()
  })

  it('renders the children', () => {
    mountComponent(mockProps)

    expect(screen.getByText('children')).toBeInTheDocument()
  })

  describe('when the prop role is info', () => {
    it('renders the right role style', () => {
      mockProps.role = 'info'

      mountComponent(mockProps)

      expect(screen.getByText('children')).toHaveClass(mockProps.role)
    })
  })

  describe('when the prop role is warning', () => {
    it('renders the right role style', () => {
      mockProps.role = 'warning'

      mountComponent(mockProps)

      expect(screen.getByText('children')).toHaveClass(mockProps.role)
    })
  })
})
