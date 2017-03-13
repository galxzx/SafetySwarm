import axios from 'axios'

//------------Actions ----------//

const SET_CURRENT_POSITION = 'SET_CURRENT_POSITION';
const SET_ALERTS = 'SET_ALERTS'
const ADD_ALERT = 'ADD_ALERT'
//-------------Action Creators -------------//

export const setCurrentPosition = (position) => ({type:SET_CURRENT_POSITION, position})

export const setAlerts = (alerts) => ({
  type: SET_ALERTS,
  alerts
})

export const addAlert = (alert) => ({
  type: ADD_ALERT,
  alert
})

const time = Date.now();

const initialState={
  currentPosition: {coords:{latitude:59.9139, longitude:10.7522}},
  alerts:[ {id: 3245, codename: "sue", message:"temp_message",long: -122.085, lat: 37.422, createdAt:"2017-03-13T02:40:26.492Z"}]
}

const reducer = (state=initialState, action) => {

  const newState = Object.assign({}, state)

  switch(action.type) {

    case SET_CURRENT_POSITION:
      newState.currentPosition = action.position
      break

    case SET_ALERTS:
      newState.alerts = action.alerts
      break

    case ADD_ALERT:
      newState.alerts = state.alerts.slice().push(action.alert)
      break
    default:
      return state
  }
  return newState;

}

//-------dispatchers--------//
export const getAlerts = () => (dispatch, getState) => {
    let currentPosition = getState().maps.currentPosition
  return axios.get(`http://10.0.2.2:1337/alerts?lat=${currentPosition.coords.latitude}&long=${currentPosition.coords.longitude}`)
    .then(res => res.data)
    .then(alerts => {
      dispatch(setAlerts(alerts))
    })
}



export default reducer
