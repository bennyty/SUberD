import { connect } from 'react-redux'
import Queue from './Queue'
import Reactotron from 'reactotron-react-native'

const mapStateToProps = (state) => {
  return {
    rides: state.queue.rides
  }
}

//Maps the data input method to the Queue component
//Calls the Queue component
const VisibleQueue = connect(
  mapStateToProps
)(Queue)

export default VisibleQueue
