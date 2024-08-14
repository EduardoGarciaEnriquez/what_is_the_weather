import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light')

  const handleChange = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return { theme, handleChange }
}
