import { AnyAction } from 'redux'
import FactionsActionTypes from './types'
import FACTIONS_DATA from '../../components/factions/factions.data'

const factionNames = Object.keys(FACTIONS_DATA)
const defaultPreview = 'badlands'

const INITIAL_STATE = { activePreview: null, activePopup: null }

const FactionsReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action
  switch (type) {
    case FactionsActionTypes.SetActivePreview:
      return {
        ...state,
        activePreview: payload,
      }
    case FactionsActionTypes.ResetDefaultPreview:
      return {
        ...state,
        activePreview: defaultPreview,
      }
    case FactionsActionTypes.SetActivePopup:
      return {
        ...state,
        activePopup: payload,
      }
    case FactionsActionTypes.ClosePopup:
      return {
        ...state,
        activePopup: null,
      }
    case FactionsActionTypes.NextPopup:
      if (state.activePopup === null) return state
      const currentIndex = factionNames.indexOf(state.activePopup)
      let newIndex = currentIndex + 1
      if (newIndex >= factionNames.length) {
        newIndex -= factionNames.length
      }
      return {
        ...state,
        activePopup: factionNames[newIndex],
      }
    default:
      return state
  }
}

export default FactionsReducer
