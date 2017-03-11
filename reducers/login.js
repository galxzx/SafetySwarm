import axios from 'axios'
import DeviceInfo from 'react-native-device-info'
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native'

//------------Actions ----------//

const SET_CODE_NAME = 'SET_CODE_NAME';

//-------------Action Creators -------------//

export const setCodeName = (name) => ({type:SET_CODE_NAME, name})



const initialState=""

const reducer = (state=initialState, action) => {

  // const newState = Object.assign({}, state)

  // switch(action.type) {

  //   case SET_CURRENT_POSITION:
  //     newState.currentPosition = action.position
  //     break

  //   default:
  //     return state
  // }
  // return newState;
  if(action.name) return action.name;
  else return state;

}


//-------Dispatchers ------------//
export const saveCodeName = (codename) => (dispatch, getState)=>{

  dispatch(setCodeName(codename))
  // const state = getState()
  // const deviceId = DeviceInfo.getUniqueID()
  // const lat = state.maps.currentPosition.coords.latitude
  // const long = state.maps.currentPosition.coords.longitude
  // const AStore = AsyncStorage.setItem('codename', codename, ()=> console.log('something'))
  // const saveDB = axios.post('http://10.0.2.2:1337/users', {deviceId, lat, long })
  // Promise.all([AStore, saveDB])
  //   .catch(err=>console.error(err))
}


export default reducer
