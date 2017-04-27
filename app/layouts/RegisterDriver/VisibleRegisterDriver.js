import { connect } from 'react-redux'
import RegisterDriver from './RegisterDriver'
import Reactotron from 'reactotron-react-native'
import {Actions} from 'react-native-router-flux'

//Connects the Ride Request page to a dispatcher which
//can send actions out via the Factory
const VisibleRegisterDriver = connect(
	null,null
)(RegisterDriver)

export default VisibleRegisterDriver