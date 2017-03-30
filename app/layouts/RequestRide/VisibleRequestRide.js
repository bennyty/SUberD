import { connect } from 'react-redux'
import RequestRide from './RequestRide'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick: (pickup, dropoff) => {
    	alert("From: " + pickup + " To: " + dropoff);
      	//dispatch(toggleTodo(pickup, dropoff, num_passengers, comment))
      	Actions.queue();
    }
  }
}

const VisibleRequestRide = connect(
  mapDispatchToProps
)(RequestRide)

export default VisibleRequestRide