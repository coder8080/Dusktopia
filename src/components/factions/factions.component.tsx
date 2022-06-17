import { FC, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetDefaultPreview } from '../../redux/factions/actions'
import FactionPreview from '../faction-preview/faction-preview.component'
import FACTIONS_DATA from './factions.data'
import './factions.styles.scss'

const Factions: FC = () => {
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(resetDefaultPreview())
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [dispatch])
  return (
    <div className="factions-container">
      {Object.entries(FACTIONS_DATA).map(([_, { id, ...value }]) => (
        <FactionPreview {...value} id={id} key={id} />
      ))}
    </div>
  )
}
export default Factions
