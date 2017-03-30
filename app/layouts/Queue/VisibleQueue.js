import { connect } from 'react-redux'
import Queue from './Queue'
import Reactotron from 'reactotron-react-native'

const mapStateToProps = (state) => {
	Reactotron.log({string:state})
  return {
    rides: 
    [
    {"comment":"NA", "dropoff":"HOME", "num_passengers":"1", "pickup":"RSE", "user":{"first_name":"TJ","last_name":"Passaro", "phone_number":"6312523291"}},
    {"comment":"Thanks!", "dropoff":"1291 14th St", "num_passengers":"4", "pickup":"1501 Sage Ave.", "user":{"first_name":"Tristan","last_name":"Wise", "phone_number":"2345234321"}}
    ]
  }
}

const VisibleQueue = connect(
  mapStateToProps
)(Queue)

export default VisibleQueue