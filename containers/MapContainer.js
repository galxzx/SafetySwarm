
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Maps from '../components/Maps'
import { getAlerts } from '../reducers/maps'

const mapState = state => ({
  currentPosition: state.maps.currentPosition,
  alerts: state.maps.alerts
})

const mapDispatch = (dispatch, getState) => {
  return {
      getAlerts: () => dispatch(getAlerts())
    }
}

class MapContainer extends Component{
  componentDidMount() {
        this.props.getAlerts()
  }

  render(){
    return (
    <Maps {...this.props} />
    )
  }
}

export default connect(mapState, mapDispatch)(MapContainer)
