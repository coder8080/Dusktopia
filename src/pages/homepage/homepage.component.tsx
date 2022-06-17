import { FC } from 'react'
import Button from '../../components/button/button.component'
import Factions from '../../components/factions/factions.component'
import SideMenu from '../../components/side-menu/side-menu.component'

import BadlandsTitle from '../../assets/faction-titles/badlands.svg'
import BadlandsBackground from '../../assets/faction-backgrounds/badlands.png'
import Normal1 from '../../assets/faction-objects/badlands/normal/1.png'
import Normal2 from '../../assets/faction-objects/badlands/normal/2.png'
import Normal3 from '../../assets/faction-objects/badlands/normal/3.png'
import Normal4 from '../../assets/faction-objects/badlands/normal/4.png'
import Dark1 from '../../assets/faction-objects/badlands/dark/1.png'
import Dark2 from '../../assets/faction-objects/badlands/dark/2.png'
import Dark3 from '../../assets/faction-objects/badlands/dark/3.png'
import Dark4 from '../../assets/faction-objects/badlands/dark/4.png'
import FactionMore from '../../components/faction-more/faction-more.component'
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
        <div className="content">
          <div className="title-container">
            <p className="display section-title light">FACTIONS</p>
          </div>
          <Factions />
        </div>
        <SideMenu currentSection="factions" />
      </section>
      <FactionMore
        id="badlands"
        title="Brighted Badlands"
        description={[
          'Modern-day Dusktopia begins here ',
          'The first thing that counts here is survival Only then can you think of profit; then finally domination',
          'Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly corrupt police force - and crush all standing in your way',
        ]}
        titleImgUrl={BadlandsTitle}
        backgroundImgUrl={BadlandsBackground}
        objects={[Normal1, Normal2, Normal3, Normal4]}
        darkObjects={[Dark1, Dark2, Dark3, Dark4]}
      />
    </div>
  )
}

export default Homepage
