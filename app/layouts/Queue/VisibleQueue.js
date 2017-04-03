import { connect } from 'react-redux'
import Queue from './Queue'
import Reactotron from 'reactotron-react-native'

const mapStateToProps = (state) => {
	Reactotron.log({string:state})
  return {
    rides: state.queue.rides
  }
}

const VisibleQueue = connect(
  mapStateToProps
)(Queue)

export default VisibleQueue
