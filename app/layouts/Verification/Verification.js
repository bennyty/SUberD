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
import Reactotron from 'reactotron-react-native'
import { dispatch } from 'redux'
import { verification } from '../../actions'


function WarningOn() {
  return (
    <Text>
      Incorrect access code. 
      Make sure capitalization is correct.
    </Text>
  );
}

function WarningOff() {
  return (
    <Text></Text>
  );
}

class Verification extends Component {
  constructor() {
    super()
    //Sets the state of the component
    this.state = {
        accessCode: '',
        warning: false,
        attempts: 0
    }
  }

  render() {
    //Function definition
    const onButtonClick = () => {
      this.state.attempts += 1;
      if(this.state.attempts <= 10 && this.state.accessCode == "AABB")
        this.props.onSubmitClick(this.state.accessCode);
      else
        this.state.warning = true;
    }

    function WarningMessage(props) {
      if (props.attempts >= 10){
        return(
          <Text>
            You are out of attempts.
            Please contact support.shotgunrpi@gmail.com for assistance.
          </Text>);
      }
      else if (props.displayMessage) {
        return (
          <Text>
            Incorrect access code. 
            Make sure capitalization is correct.
            You have {10-props.attempts} left.
          </Text>);
      }
      else
        return (<Text></Text>);
    }

    return (
      <View style={styles.container}>
        <View></View>
        <View style={styles.heading}>
          <Text style={styles.headingText}> 
            Enter the verification code sent to your 
            phone below to start using the app! 
          </Text>
        </View>
        <View style={styles.inputs}>
          {/*Input boxes for each requested field*/}
          <TextInput
            style = {styles.inp}
            placeholder = 'Enter access code here'
            onChangeText={(text) => this.setState({accessCode: text})}/>
        </View>
        <WarningMessage displayMessage={this.state.warning} attempts={this.state.attempts}/>
        {/*Button for submitting the info*/}
        {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
        <TouchableHighlight 
        style = {styles.submit}
        onPress = {onButtonClick}>
          <Text> Submit </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Verification.propTypes = {
  onSubmitClick: PropTypes.func.isRequired
}

export default Verification;