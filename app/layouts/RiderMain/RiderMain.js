import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  TextInput,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux'

import { dispatch } from 'redux'
import { riderMain } from '../../actions'

class RiderMain extends Component {
  constructor() {
    super()
    //Sets the state of the component
    this.state = {
       eventID: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <Text style={styles.instruction}> To request a ride, enter the Event ID of your sober driver below</Text>
        <View style={styles.inputs}>
          {/*Input boxes for each requested field*/}
          <TextInput
            style = {styles.inp}
            placeholder = 'Event ID'
            onChangeText={(text) => this.setState({eventID: text})}/>
        </View>
        {/*Button for submitting the info*/}
        {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
        <TouchableHighlight 
        style = {styles.submit}
        onPress = {() => this.props.onRequestRideClick(this.state.eventID)}>
          <Text> Request Ride </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

RiderMain.propTypes = {
  onRequestRideClick: PropTypes.func.isRequired
}

export default RiderMain;