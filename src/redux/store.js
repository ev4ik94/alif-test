import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

/*---Reducers---*/
import rootReducers from './reducer/rootReducers'

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store