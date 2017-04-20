import { connect } from 'react-redux'
import RiderMain from './RiderMain'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onRequestRideClick: (eventid) => {
    	alert("Event ID: " + eventid);
      //dispatch(requestRide({eventId, phoneNumber, name, pickup, dropoff, numRiders, comment}));
      Actions.requestRide({eventID: eventid});
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRiderMain = connect(
  mapDispatchToProps
)(RiderMain)

export default VisibleRiderMain