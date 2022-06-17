import { AnyAction } from 'redux'
import FactionsActionTypes from './types'

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
    default:
      return state
  }
}

export default FactionsReducer
