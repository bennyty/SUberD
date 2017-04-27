import { connect } from 'react-redux'
import Register from './Register'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'
import {setUserName} from '../../actions'
import {setUserPhoneNumber} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RequestRide class on the 'submit' button press
    onSubmitClick: (name, phoneNumber) => {
      	//dispatch(toggleTodo(pickup, dropoff, num_passengers, comment))
      	dispatch(setUserName({name: name}));
      	dispatch(setUserPhoneNumber({phoneNumber: phoneNumber}));
      	Actions.riderMain();
    }
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRegister = connect(
  null,mapDispatchToProps
)(Register)

export default VisibleRegister