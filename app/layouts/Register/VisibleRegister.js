import { connect } from 'react-redux'
import Register from './Register'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onSubmitClick: (name, phoneNumber) => {
    	alert("Thanks " + name + " for registering.\n A confirmation text message has been sent to " + phoneNumber +".");
      	//dispatch(toggleTodo(pickup, dropoff, num_passengers, comment))
      	Actions.verification();
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRegister = connect(
  mapDispatchToProps
)(Register)

export default VisibleRegister