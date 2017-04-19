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
import { requestRide } from '../../actions'

class RequestRide extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <View>
          {/*Input boxes for each requested field*/}
          <Text>From: {this.props.pickup}</Text>
          <Text>To: {this.props.dropoff}</Text>
          <Text>Number of Passengers: {this.props.numRiders}</Text>
          <Text>Comment for driver: {this.props.comment}</Text>
        </View>
        {/*Button for submitting the info*/}
        {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
        <TouchableHighlight 
        style = {styles.submit}
        onPress = {() => this.props.onConfirmClick("1111", this.props.phoneNumber, this.props.name, this.props.pickup, this.props.dropoff, this.props.numRiders, this.props.comment)}>
          <Text> Confirm! </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

RequestRide.propTypes = {
  onConfirmClick: PropTypes.func.isRequired,
  eventID: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pickup: PropTypes.string.isRequired,
  dropoff: PropTypes.string.isRequired,
  numRiders: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
}

export default RequestRide;
