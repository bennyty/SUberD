import { connect } from 'react-redux'
import Ride from './Ride'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'
import {removeRide} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the Ride class on the 'submit' button press
    onSubmitClick: () => {
    	alert("Submit");
      	//dispatch(toggleTodo(pickup, dropoff, num_passengers, comment))
    },
    //Is called by the Ride class on the 'cancel' button press
    onCancelClick: (rideID, eventID) => {
      Reactotron.log(eventID);
      Reactotron.log(rideID);
      dispatch(removeRide({eventID: eventID, key: rideID}));
      Actions.queue(eventID);
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRide = connect(
  null,mapDispatchToProps
)(Ride)

export default VisibleRide