import { connect } from 'react-redux';
import Maps from '../components/Maps';

const mapState = state => ({
  currentPosition: state.maps.currentPosition,
  alerts: state.maps.alerts
})

export default connect(mapState)(Maps);
