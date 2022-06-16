import { FC } from 'react'
import Button from '../../components/button/button.component'
import Factions from '../../components/factions/factions.component'
import './homepage.styles.scss'

const Homepage: FC = () => {
  return (
    <div className="homepage">
      <section className="section home">
        <div className="content">
          <p className="h0 light section-title">From dusk to dawn</p>
          <div className="button-container">
            <Button type="transparent">Mint</Button>
            <Button type="white">Connect Wallet</Button>
          </div>
        </div>
        <div className="ellipse-1" />
        <div className="ellipse-2" />
      </section>
      <section className="factions section">
        <div className="ellipse ellipse-1" />
        <div className="ellipse ellipse-2" />
        <div className="content">
          <div className="title-container">
            <p className="display section-title light">FACTIONS</p>
          </div>
          <Factions baseActiveFaction={1} />
        </div>
      </section>
    </div>
  )
}

export default Homepage
