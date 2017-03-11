//------------Actions ----------//

const SET_CURRENT_POSITION = 'SET_CURRENT_POSITION';

//-------------Action Creators -------------//

export const setCurrentPosition = (position) => ({type:SET_CURRENT_POSITION, position})

const time = Date.now();

const initialState={
  currentPosition: {coords:{latitude:59.9139, longitude:10.7522}},
  alerts:[{coords: {longitude: -122.085, latitude: 37.422}, timestamp:time}]
}

const reducer = (state=initialState, action) => {

  const newState = Object.assign({}, state)

  switch(action.type) {

    case SET_CURRENT_POSITION:
      newState.currentPosition = action.position
      break

    default:
      return state
  }
  return newState;

}




export default reducer
