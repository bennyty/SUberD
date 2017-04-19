import './devTools'
import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './config/store/configureStore'
import RequestRide from './layouts/RequestRide'
import Queue from './layouts/Queue'
import Ride from './layouts/Ride'
import Register from './layouts/Register'
import Verification from './layouts/Verification'
import RideConfirmation from './layouts/RideConfirmation'
import RiderMain from './layouts/RiderMain'

const RouterWithRedux = connect()(Router)
const store = configureStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='riderMain' component={RiderMain} title='Home'/>
          <Scene key='requestRide' component={RequestRide} title='Request a Ride'/>
          <Scene key='register' component={Register} title='Register'/>
          <Scene key='verification' component={Verification} title='Verification'/>
          <Scene key='queue' component={Queue} title='Ride Queue'/>
          <Scene key='ride' component={Ride} title='Ride'/>
          <Scene key='rideConfirmation' component={RideConfirmation} title='Ride Confirmation'/>
        </RouterWithRedux>
      </Provider>
    )
  }
}
