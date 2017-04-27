import { connect } from 'react-redux'
import Queue from './Queue'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'
import {ListView} from 'react-native'
import {startQueueUpdates} from '../../actions'
import {stopQueueUpdates} from '../../actions'

const mapStateToProps = (state) => {
	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	datasource = ds.cloneWithRows(state.queue.rides)
  	return {
    	dataSource: datasource
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
