import { connect } from 'react-redux'
import Verification from './Verification'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onSubmitClick: () => {
    	alert("Your account has been verified!");
      	//dispatch(toggleTodo(pickup, dropoff, num_passengers, comment))
      	Actions.requestRide();
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleVerification = connect(
  mapDispatchToProps
)(Verification)

export default VisibleVerification