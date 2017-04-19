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
  constructor() {
    super()
    //Sets the state of the component
    this.state = {
       pickup: '',
       dropoff: '',
       numRiders: '',
       comment: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <View style={styles.org}>
          <Text style={styles.welcome}> Org. Name </Text>
        </View>
        <View style={styles.inputs}>
          {/*Input boxes for each requested field*/}
          <TextInput
            style = {styles.inp}
            placeholder = 'from'
            onChangeText={(text) => this.setState({pickup: text})}/>
          <TextInput
            style = {styles.inp}
            placeholder = 'To'
            onChangeText={(text) => this.setState({dropoff: text})}/>
          <TextInput
            style = {styles.inp}
            placeholder = '# of People'
            onChangeText={(text) => this.setState({numRiders: text})}/>
          <TextInput
            style = {styles.inp}
            multiline = {true}
            numberOfLines = {4}
            placeholder = 'Comment for Driver (Optional)'
            onChangeText={(text) => this.setState({comment: text})}/>
        </View>
        {/*Button for submitting the info*/}
        {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
        <TouchableHighlight 
        style = {styles.submit}
        onPress = {() => Actions.rideConfirmation({eventID: this.props.eventID, phoneNumber: this.props.phoneNumber, name: this.props.name, pickup: this.state.pickup, dropoff: this.state.dropoff, numRiders: this.state.numRiders, comment: this.state.comment})}>
          <Text> Submit </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

RequestRide.propTypes = {
  eventID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
}

export default RequestRide;
