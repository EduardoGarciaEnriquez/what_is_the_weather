import './style.css'

export type Role = 'info' | 'warning'

export interface IProps {
  children: JSX.Element
  role: Role
}

function Alert({ children, role }: IProps) {
  return (
    <div data-testid="alert-badge" className={`alert ${role}`}>
      {children}
    </div>
  )
}

export default Alert
