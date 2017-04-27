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
import { driverConfirmation } from '../../actions'

class DriverConfirmation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <View>
          <Text style={styles.header}>Your driving information</Text>
          <Text></Text>
          {/*Input boxes for each requested field*/}
          <Text>From: {this.props.startTime}</Text>
          <Text>To: {this.props.endTime}</Text>
          <Text>In a {this.props.descr}</Text>
          <Text>That holds {this.props.maxRiders} other passengers.</Text>
        </View>
        <View>
          <Text style={styles.eventInfo}>Your event code: {this.props.eventCode}</Text>
          <Text style={styles.eventInfo}>Your event password: {this.props.eventPassword}</Text>
        </View>
        {/*Button for submitting the info*/}
        {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
        <TouchableHighlight 
        style = {styles.submit}
        onPress = {() => this.props.onConfirmClick(this.props.name, this.props.phoneNumber, this.props.startTime, this.props.endTime, this.props.maxRiders, this.props.descr, this.props.org, this.props.eventCode, this.props.eventPassword)}>
          <Text> Confirm </Text>
        </TouchableHighlight>
        <View>
          <Text style={styles.footer}>Thank you and please drive safely :)</Text>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    );
  }
}


DriverConfirmation.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  onConfirmClick: PropTypes.func.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  maxRiders: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  eventCode: PropTypes.string.isRequired,
  eventPassword: PropTypes.string.isRequired
}

export default DriverConfirmation;
