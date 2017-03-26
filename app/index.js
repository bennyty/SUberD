import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './config/store/configureStore'
import RequestRide from './layouts/RequestRide'

const RouterWithRedux = connect()(Router)
const store = configureStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='login' component={RequestRide} title='Login Page' />
          <Scene key='loginTwo' component={RequestRide} title='Login Two' />
        </RouterWithRedux>
      </Provider>
    )
  }
}
