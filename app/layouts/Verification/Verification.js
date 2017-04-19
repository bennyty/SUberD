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

class WrongCodeMessage extends Component{
  render(){
    if (this.state.displayWarning){
      return(
        <Text>
          Incorrect access code. 
          Make sure capitalization is correct.
        </Text>
      );
    }
    else{
      return(<Text></Text>);
    }
  }
}

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
        warning: false
    }
    Reactotron.log("value: " + this.state.warning);
  }

  render() {
    //Function definition
    const onButtonClick = () => {
      if(this.state.accessCode == "AABB")
        this.props.onSubmitClick(this.state.accessCode);
      else
        this.state.warning = true;
    }

    function WarningMessage(props) {
      if (props.displayMessage) {
        return (
          <Text>
            Incorrect access code. 
            Make sure capitalization is correct.
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
        <WarningMessage displayMessage={this.state.warning}/>
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