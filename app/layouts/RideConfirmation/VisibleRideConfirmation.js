import { connect } from 'react-redux'
import RideConfirmation from './RideConfirmation'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'
import {requestRide} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onConfirmClick: (eventID, phoneNumber, name, pickup, dropoff, numRiders, comment) => {
    	Reactotron.log(JSON.stringify(dispatch))
    	dispatch(requestRide({eventID, phoneNumber: "6312523291", name: "TJ", pickup, dropoff, numRiders, comment, status: 1}));
      Actions.wait({rideID: 0, eventID: eventID, phoneNumber: phoneNumber, name: name, pickup: pickup, dropoff: dropoff, numRiders: numRiders, comment: comment});
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRideConfirmation = connect(
  null, mapDispatchToProps
)(RideConfirmation)

export default VisibleRideConfirmation
