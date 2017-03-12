import axios from 'axios'

import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native'

//------------Actions ----------//

const SET_CODE_NAME = 'SET_CODE_NAME';
const SET_TOKEN = 'SET_TOKEN'

//-------------Action Creators -------------//

export const setCodeName = (name) => ({type:SET_CODE_NAME, name})
export const setToken = (token) => ({type:SET_TOKEN, token })



const initialState={codename: "", token: ""}

const reducer = (state=initialState, action) => {

  const newState = Object.assign({}, state)

  switch(action.type) {

    case SET_CODE_NAME:
      newState.codename = action.name
      break

    case SET_TOKEN:
      newState.token = action.token
      break

    default:
      return state
  }
  return newState;
}


//-------Dispatchers ------------//
export const saveCodeName = (codename) => (dispatch, getState)=>{

  dispatch(setCodeName(codename))
  // const state = getState()
  // const deviceId = DeviceInfo.getUniqueID()
  // const lat = state.maps.currentPosition.coords.latitude
  // const long = state.maps.currentPosition.coords.longitude
  const AStore = AsyncStorage.setItem('codename', codename, ()=> console.log('something'))
  // const saveDB = axios.post('http://10.0.2.2:1337/users', {deviceId, lat, long })
  // Promise.all([AStore, saveDB])
  //   .catch(err=>console.error(err))
}

export const registerDevice = (deviceId, lat, long, fcmToken) => dispatch => {

  return axios.post('http://10.0.2.2:1337/users', {deviceId, lat, long, fcmToken})
}


export default reducer
