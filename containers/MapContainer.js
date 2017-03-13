
import React, {Component} from 'react'
import { connect } from 'react-redux';
import Maps from '../components/Maps';

const mapState = state => ({
  currentPosition: state.maps.currentPosition,
  alerts: state.maps.alerts
})

// class MapContainer extends Component{
//   componentDidMount() {

//   }
// }

export default connect(mapState)(Maps);
