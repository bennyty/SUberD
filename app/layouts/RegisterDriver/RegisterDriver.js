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

class RegisterDriver extends Component {
  constructor() {
    super()
    //Sets the state of the component
    this.state = {
       startTime: '',
       endTime: '',
       maxRiders: '',
       descr: '',
       org: ''
    }
  }

  render() {

    const onButtonClick = () => {
      if(this.state.startTime != "" && this.state.endTime != "" && this.state.maxRiders != ""){
        eventCode = (Math.floor(Math.random()*(10000-1000))+1000).toString();
        eventPassword = (Math.floor(Math.random()*(10000-1000))+1000).toString();
        Actions.driverConfirmation({name: this.props.name, phoneNumber: this.props.phoneNumber, startTime: this.state.startTime, endTime: this.state.endTime, maxRiders: this.state.maxRiders, descr: this.state.descr, org: this.state.org, eventCode: eventCode, eventPassword: eventPassword});
      }
    }

    return (
      <View style={styles.container}>
        <View style={{flex: .12}}></View>
        <View style={styles.heading}>
          <Text style={styles.headingText}> Register to Drive Tonight: </Text>
        </View>
        <View style={styles.inputs}>
          {/*Input boxes for each requested field*/}
          <Text>Start Time:</Text>
          <TextInput
            style = {styles.inp}
            placeholder = 'Start time'
            onChangeText={(text) => this.setState({startTime: text})}/>
          <Text>End Time:</Text>
          <TextInput
            style = {styles.inp}
            placeholder = 'End time'
            onChangeText={(text) => this.setState({endTime: text})}/>
          <Text># of passengers your car seats:</Text>
          <TextInput
            style = {styles.inp}
            placeholder = 'Maximum Number of Passengers'
            onChangeText={(text) => this.setState({maxRiders: text})}/>
          <Text>Description of your car:</Text>
          <TextInput
            style = {styles.inp}
            placeholder = 'Car Description'
            onChangeText={(text) => this.setState({descr: text})}/>
          <Text>Organization Name:</Text>
          <TextInput
            style = {styles.inp}
            placeholder = 'Organization Identifier'
            onChangeText={(text) => this.setState({org: text})}/>
        </View>
        <View style={{flex: .05}}></View>
        {/*Button for submitting the info*/}
        {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
        <TouchableHighlight 
        style = {styles.submit}
        onPress = {onButtonClick}>
          <Text> I want to drive! </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

RegisterDriver.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
}

export default RegisterDriver;