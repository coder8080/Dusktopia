import FactionsActionTypes from './types'

export const setActivePreview = (id: string) => ({
  type: FactionsActionTypes.SetActivePreview,
  payload: id,
})

export const resetDefaultPreview = () => ({
  type: FactionsActionTypes.ResetDefaultPreview,
})

export const setActivePopup = (id: string) => ({
  type: FactionsActionTypes.SetActivePopup,
  payload: id,
})

export const closePopup = () => ({
  type: FactionsActionTypes.ClosePopup,
})
