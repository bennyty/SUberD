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
import { wait } from '../../actions'

class Wait extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <Text style={styles.header}>You have been successfully added to the queue!</Text>
        <View style={styles.statsView}>
          <Text style={styles.stats}>Wait time: </Text>
          <Text style={styles.stats}>Queue Spot: </Text>
        </View>
        <View>
          {/*Input boxes for each requested field*/}
          <Text style={styles.rideInfo}>Your Ride Information</Text>
          <Text></Text>
          <Text>From: {this.props.pickup}</Text>
          <Text>To: {this.props.dropoff}</Text>
          <Text>Number of Passengers: {this.props.numRiders}</Text>
          <Text>Comment for driver: {this.props.comment}</Text>
        </View>
        {/*Button for submitting the info*/}
        {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
        <View>
          <TouchableHighlight 
          style = {styles.submit}
          onPress = {() => this.props.onEditClick(this.props.rideID, this.props.eventID, this.props.pickup, this.props.dropoff, this.props.numRiders, this.props.comment)}>
            <Text> Edit Ride Information </Text>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress = {() => this.props.onCancelClick(this.props.rideID)}
            style = {styles.deny}>
            <Text>Cancel</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Wait.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  eventID: PropTypes.string.isRequired,
  pickup: PropTypes.string.isRequired,
  dropoff: PropTypes.string.isRequired,
  numRiders: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
}

export default Wait;
