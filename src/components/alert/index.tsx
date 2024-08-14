import React from 'react'

import './style.css'

type Role = 'info' | 'warning'

function Alert({ children, role }: { children: React.ReactNode; role: Role }) {
  return (
    <div id="weather" className={`alert ${role}`}>
      {children}
    </div>
  )
}

export default Alert
