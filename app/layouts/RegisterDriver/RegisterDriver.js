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
        Actions.driverConfirmation({startTime: this.state.startTime, endTime: this.state.endTime, maxRiders: this.state.maxRiders, descr: this.state.descr, org: this.state.org, eventCode: eventCode, eventPassword: eventPassword});
      }
    }

    return (
      <View style={styles.container}>
        <View></View>
        <View style={styles.heading}>
          <Text style={styles.headingText}> Register to Drive Tonight: </Text>
        </View>
        <View style={styles.inputs}>
          {/*Input boxes for each requested field*/}
          <TextInput
            style = {styles.inp}
            placeholder = 'Start time'
            onChangeText={(text) => this.setState({startTime: text})}/>
          <TextInput
            style = {styles.inp}
            placeholder = 'End time'
            onChangeText={(text) => this.setState({endTime: text})}/>
          <TextInput
            style = {styles.inp}
            placeholder = 'Maximum Number of Passengers'
            onChangeText={(text) => this.setState({maxRiders: text})}/>
          <TextInput
            style = {styles.inp}
            placeholder = 'Car Description'
            onChangeText={(text) => this.setState({descr: text})}/>
          <TextInput
            style = {styles.inp}
            placeholder = 'Organization Identifier'
            onChangeText={(text) => this.setState({org: text})}/>
        </View>
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

}

export default RegisterDriver;