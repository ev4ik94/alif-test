import {combineReducers} from 'redux'
import bgColorReducer from './bgColor.reducer'

const rootReducers = combineReducers({
    bgColor: bgColorReducer
})


export default rootReducers