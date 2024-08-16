import { act } from 'react'
import { describe, expect, it } from 'vitest'

import { renderHook } from '@testing-library/react'
import { useTheme } from './useTheme'

describe('useTheme', () => {
  it('returns initial state', () => {
    const { result } = renderHook(useTheme)

    expect(result.current.theme).toEqual('light')
  })

  it('toggles theme mode', async () => {
    const { result } = renderHook(useTheme)

    await act(async () => result.current.handleChange())

    expect(result.current.theme).toEqual('dark')

    await act(async () => result.current.handleChange())

    expect(result.current.theme).toEqual('light')
  })
})
