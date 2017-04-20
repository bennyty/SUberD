import { connect } from 'react-redux'
import RiderMain from './RiderMain'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'
import {verifyData} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
  	//Is called by the RiderMain class on the button press
    onRequestRideClick: (eventID) => {
    	//Sends a call to the dispatcher which verifies whether or not the event code exists in the db
      	res = dispatch(verifyData({path: 'events/', data: eventID}));
      	Reactotron.log(res);
      	if(res)
      		Actions.requestRide({eventID: eventID});
      	else
      		Actions.riderMain();
    }
  }
}

//Connects the RiderMain page to a dispatcher which
//can send actions out via the Factory
const VisibleRiderMain = connect(
  null, mapDispatchToProps
)(RiderMain)

export default VisibleRiderMain