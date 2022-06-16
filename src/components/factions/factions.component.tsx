import { FC, useState, useLayoutEffect } from 'react'
import FactionPreview from '../faction-preview/faction-preview.component'
import FACTIONS_DATA from './factions.data'
import './factions.styles.scss'

interface FactionProps {
  baseActiveFaction: number
}

const Factions: FC<FactionProps> = ({ baseActiveFaction }) => {
  const [activeFaction, setActiveFaction] = useState(-1)
  const setActiveFactionId = (id: number | null) => {
    setActiveFaction(id || baseActiveFaction)
  }
  useLayoutEffect(() => {
    setTimeout(() => setActiveFaction(baseActiveFaction), 100)
  }, [])
  return (
    <div className="factions-container">
      {Object.entries(FACTIONS_DATA).map(([_, { id, ...value }]) => (
        <FactionPreview
          {...value}
          id={id}
          key={id}
          activeId={activeFaction}
          setActiveId={setActiveFactionId}
        />
      ))}
    </div>
  )
}
export default Factions
