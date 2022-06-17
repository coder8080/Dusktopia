import { createSelector } from 'reselect'

interface factionsState {
  activePreview: string | null
  activePopup: string | null
}

interface state {
  factions: factionsState
}

const selectFactions = (state: state) => state.factions
export const selectActivePreview = createSelector(
  [selectFactions],
  (factions) => factions.activePreview
)
export const selectActivePopup = createSelector(
  [selectFactions],
  (factions) => factions.activePopup
)
