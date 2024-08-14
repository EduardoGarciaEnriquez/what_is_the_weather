import { useState } from 'react'
import { useTheme } from './hooks/useTheme'

import sunIcon from './assets/sun.svg'
import moonIcon from './assets/moon.svg'

export const Switch = () => {
  const { theme, handleChange } = useTheme()

  return (
    <button onClick={handleChange} className="toggle-theme">
      <img src={theme === 'dark' ? sunIcon : moonIcon} alt="toggle theme" />
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
