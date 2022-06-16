import { FC, ReactNode } from 'react'
import './button.styles.scss'

interface ButtonProps {
  children: ReactNode
  type: 'white' | 'transparent' | 'badlands-gradient'
}

const Button: FC<ButtonProps> = ({ children, type }) => (
  <button className={`btn ${type}`}>
    <div className="corner-1" />
    <div className="corner-2" />
    {children}
  </button>
)

export default Button
