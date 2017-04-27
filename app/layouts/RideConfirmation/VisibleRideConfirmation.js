import { connect } from 'react-redux'
import RideConfirmation from './RideConfirmation'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'
import {requestRide} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onConfirmClick: (eventID, phoneNumber, name, pickup, dropoff, numRiders, comment) => {
      rideKey = dispatch(requestRide({eventID, phoneNumber, name, pickup, dropoff, numRiders, comment, status: 1}));
      Reactotron.log(JSON.stringify(rideKey));
      Actions.wait({eventID: eventID, rideKey: rideKey, phoneNumber: phoneNumber, name: name, pickup: pickup, dropoff: dropoff, numRiders: numRiders, comment: comment});
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRideConfirmation = connect(
  null, mapDispatchToProps
)(RideConfirmation)

export default VisibleRideConfirmation
