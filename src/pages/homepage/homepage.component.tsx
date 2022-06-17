import { FC } from 'react'
import Button from '../../components/button/button.component'
import Factions from '../../components/factions/factions.component'
import SideMenu from '../../components/side-menu/side-menu.component'
import FactionsMoreGroup from '../../components/factions-more-group/factions-more-group.component'
import './homepage.styles.scss'

const Homepage: FC = () => {
  return (
    <div className="homepage">
      <section className="section home" id="home">
        <div className="content">
          <p className="h0 light section-title">From dusk to dawn</p>
          <div className="button-container">
            <Button type="transparent">Mint</Button>
            <Button type="white">Connect Wallet</Button>
          </div>
        </div>
        <div className="ellipse-1" />
        <div className="ellipse-2" />
        <SideMenu currentSection="home" />
      </section>
      <section className="factions section" id="factions">
        <div className="ellipse ellipse-1" />
        <div className="ellipse ellipse-2" />
        <div className="section-content">
          <div className="title-container">
            <p className="display section-title light">FACTIONS</p>
          </div>
          <Factions />
        </div>
        <SideMenu currentSection="factions" />
        <FactionsMoreGroup />
      </section>
    </div>
  )
}

export default Homepage
