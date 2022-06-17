import { FC } from 'react'
import FactionMore from '../faction-more/faction-more.component'
import FACTIONS_MORE_DATA from './factions-more.data'
import './faction-more-group.styles.scss'

const FactionsMoreGroup: FC = () => (
  <div className="factions-more-group">
    {Object.entries(FACTIONS_MORE_DATA).map(([_, value], i) => (
      <FactionMore key={i} {...value} />
    ))}
  </div>
)

export default FactionsMoreGroup
