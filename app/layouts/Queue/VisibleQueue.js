import { connect } from 'react-redux'
import Queue from './Queue'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'
import {startQueueUpdates} from '../../actions'
import {stopQueueUpdates} from '../../actions'

const mapStateToProps = (state) => {
  return {
    rides: state.queue.rides
  }
}

const mapDispatchToProps = (dispatch) => {
	return{
		onStartQueue: (eventID) => {
			dispatch(startQueueUpdates({eventID}));
		},
		onEndQueue: () => {
			dispatch(stopQueueUpdates());
		}
	}
}

//Maps the data input method to the Queue component
//Calls the Queue component
const VisibleQueue = connect(
  mapStateToProps, mapDispatchToProps
)(Queue)

export default VisibleQueue
