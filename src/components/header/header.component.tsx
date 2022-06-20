import { FC, useCallback, useState, useLayoutEffect } from 'react'
import Discord from '../../assets/social-networks/discord.svg'
import Twitter from '../../assets/social-networks/twitter.svg'
import Medium from '../../assets/social-networks/medium.svg'
import Menu from '../../assets/menu.svg'
import Cross from '../../assets/cross.svg'
import Logo from '../logo/logo.component'
import Button from '../button/button.component'
import './header.styles.scss'

const Header: FC = () => {
  const [blurred, setBlurred] = useState(0)
  const [backgroundOpacity, setBackgroundOpacity] = useState(0)
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const onScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 100) {
      setBlurred(46)
      setBackgroundOpacity(0.2)
    } else {
      setBlurred(Math.floor((scrollPosition / 100) * 46))
      setBackgroundOpacity((scrollPosition / 100) * 0.2)
    }
  }, [setBlurred])
  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
  const openMenu = () => setIsMenuOpened(true)
  const closeMenu = () => setIsMenuOpened(false)
  return (
    <header className="header">
      <nav className="nav">
        <div
          className="blur"
          style={{
            backdropFilter: `blur(${blurred}px)`,
            background: `rgba(255, 255, 255, ${backgroundOpacity})`,
          }}
        />
        <div className="logo-container">
          <Logo />
        </div>
        <div className="open-menu-container" onClick={openMenu}>
          <img src={Menu} alt="open menu" />
        </div>
        <div className={`menu${isMenuOpened ? ' active' : ''}`}>
          <div className="menu-heading">
            <Logo />
            <img
              src={Cross}
              alt="close"
              className="close-img"
              onClick={closeMenu}
            />
          </div>
          <ul className="nav-items">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={closeMenu}>
                home
              </a>
            </li>
            <li className="nav-item">
              <a href="#factions" className="nav-link" onClick={closeMenu}>
                factions
              </a>
            </li>
          </ul>
          <div className="bottom-container">
            <div className="social">
              <a href="/" className="social-link">
                <img src={Discord} alt="discord" className="social-img" />
              </a>
              <a href="/" className="social-link">
                <img src={Twitter} alt="twitter" className="social-img" />
              </a>
              <a href="/" className="social-link">
                <img src={Medium} alt="medium" className="social-img" />
              </a>
            </div>
            <div className="button-container">
              <Button type="transparent">Whitepaper</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
