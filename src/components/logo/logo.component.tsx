import { FC } from 'react'
import LogoImg from '../../assets/logo.png'
import './logo.styles.scss'

const Logo: FC = () => (
  <div className="logo">
    <img src={LogoImg} alt="Dusktopia" />
  </div>
)

export default Logo
