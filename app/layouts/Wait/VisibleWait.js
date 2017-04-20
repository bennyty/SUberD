import { connect } from 'react-redux'
import Wait from './Wait'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'
import {removeRide} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the Edit Ride class on the button press
    onEditClick: (rideId, eventID, pickup, dropoff, numRiders, comment) => {
      //dispatch(requestRide({eventId, phoneNumber, name, pickup, dropoff, numRiders, comment}));
      Actions.editRide({eventID: eventID, pickup: pickup, dropoff: dropoff, numRiders: numRiders, comment: comment});
    },
    onCancelClick: (rideID) => {
    	alert("Cancelled Ride");
      //dispatch(removeRide({}));
      Actions.riderMain();
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleWait = connect(
  null, mapDispatchToProps
)(Wait)

export default VisibleWait