import { connect } from 'react-redux'
import RequestRide from './RequestRide'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    phoneNumber: state.user.phoneNumber
  }
}


//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRequestRide = connect(
  mapStateToProps
)(RequestRide)

export default VisibleRequestRide