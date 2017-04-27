import { connect } from 'react-redux'
import RegisterDriver from './RegisterDriver'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    phoneNumber: state.user.phoneNumber
  }
}

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRegisterDriver = connect(
	mapStateToProps,null
)(RegisterDriver)

export default VisibleRegisterDriver