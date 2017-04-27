import { connect } from 'react-redux'
import DriverConfirmation from './DriverConfirmation'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'
import {requestRide} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onConfirmClick: (name, phoneNumber, startTime, endTime, maxRiders, descr, org, eventCode, eventPassword) => {
      dispatch(addDriver({eventID: eventCode, password: eventPassword, phoneNumber, name, maxRiders, carInformation: descr, status: 1}));
      Actions.queue();
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleDriverConfirmation = connect(
  mapDispatchToProps
)(DriverConfirmation)

export default VisibleDriverConfirmation