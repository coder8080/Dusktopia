import { FC } from 'react'
import Button from '../../components/button/button.component'
import './homepage.styles.scss'

const Homepage: FC = () => (
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
  </div>
)

export default Homepage
