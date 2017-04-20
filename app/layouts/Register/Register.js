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
import { register } from '../../actions'

class Register extends Component {
  constructor() {
    super()
    //Sets the state of the component
    this.state = {
       name: '',
       phoneNumber: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <View style={styles.heading}>
          <Text style={styles.headingText}> Register </Text>
        </View>
        <View style={styles.inputs}>
          {/*Input boxes for each requested field*/}
          <TextInput
            style = {styles.inp}
            placeholder = 'Name'
            onChangeText={(text) => this.setState({name: text})}/>
          <TextInput
            style = {styles.inp}
            placeholder = 'Phone Number'
            onChangeText={(text) => this.setState({phoneNumber: text})}/>
        </View>
        <Text>
        	After hitting confirm, a text will be sent to your phone 
        	giving you a verification code for the next page.
        </Text>
        {/*Button for submitting the info*/}
        {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
        <TouchableHighlight 
        style = {styles.submit}
        onPress = {() => this.props.onSubmitClick(this.state.name, this.state.phoneNumber)}>
          <Text> Register </Text>
        </TouchableHighlight>
        <Text>
        	CAREFUL: You cannot change your name and number after making an account
        </Text>
      </View>
    );
  }
}

Register.propTypes = {
  onSubmitClick: PropTypes.func.isRequired
}

export default Register;