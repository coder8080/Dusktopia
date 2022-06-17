import { combineReducers } from 'redux'
import FactionsReducer from './factions/reducer'

const rootReducer = combineReducers({ factions: FactionsReducer })

export default rootReducer
