import { FC, ReactNode } from 'react'
import './button.styles.scss'

interface ButtonProps {
  children: ReactNode
  type: 'white' | 'transparent' | 'badlands-gradient'
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, type, ...props }) => (
  <button className={`btn ${type}`} {...props}>
    <div className="corner-1" />
    <div className="corner-2" />
    {children}
  </button>
)

export default Button
