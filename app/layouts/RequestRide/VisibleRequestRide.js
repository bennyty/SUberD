import { connect } from 'react-redux'
import RequestRide from './RequestRide'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onSubmitClick: (pickup, dropoff) => {
    	alert("From: " + pickup + " To: " + dropoff);
      	//dispatch(toggleTodo(pickup, dropoff, num_passengers, comment))
      	Actions.queue();
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRequestRide = connect(
  mapDispatchToProps
)(RequestRide)

export default VisibleRequestRide