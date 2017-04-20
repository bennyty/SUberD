import { connect } from 'react-redux'
import RideEditConfirmation from './RideEditConfirmation'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onConfirmClick: (eventID, phoneNumber, name, pickup, dropoff, numRiders, comment) => {
    	alert("Editted Ride Request");
      //dispatch(requestRide({eventId, phoneNumber, name, pickup, dropoff, numRiders, comment}));
      Actions.wait({eventID:eventID, phoneNumber: phoneNumber, name: name, pickup: pickup, dropoff: dropoff, numRiders: numRiders, comment: comment});
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRideEditConfirmation = connect(
  mapDispatchToProps
)(RideEditConfirmation)

export default VisibleRideEditConfirmation