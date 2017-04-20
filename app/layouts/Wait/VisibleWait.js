import { connect } from 'react-redux'
import Wait from './Wait'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onEditClick: (rideId, eventID, pickup, dropoff, numRiders, comment) => {
      //dispatch(requestRide({eventId, phoneNumber, name, pickup, dropoff, numRiders, comment}));
      Actions.editRide({eventID: eventID, pickup: pickup, dropoff: dropoff, numRiders: numRiders, comment: comment});
    },
    onCancelClick: (rideID) => {
    	alert("Cancelled Ride");
      //dispatch(requestRide({eventId, phoneNumber, name, pickup, dropoff, numRiders, comment}));
      Actions.riderMain();
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleWait = connect(
  mapDispatchToProps
)(Wait)

export default VisibleWait