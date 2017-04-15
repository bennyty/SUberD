import './devTools'
import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './config/store/configureStore'
import RequestRide from './layouts/RequestRide'
import Queue from './layouts/Queue'
import Ride from './layouts/Ride'

const RouterWithRedux = connect()(Router)
const store = configureStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='requestRide' component={RequestRide} title='Request a Ride'/>
          <Scene key='queue' component={Queue} title='Ride Queue'/>
          <Scene key='ride' component={Ride} title='Ride'/>
        </RouterWithRedux>
      </Provider>
    )
  }
}
