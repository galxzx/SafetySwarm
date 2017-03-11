import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  maps: require('./maps').default,
  codename: require('./login').default
})

export default rootReducer
