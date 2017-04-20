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
       numRiders: '1',
       comment: '',
       warning: false
    }
  }

  render() {
    //Function definition
    const onButtonClick = () => {
      if(this.state.pickup == "" || this.state.dropoff == "" || parseInt(this.state.numRiders) < 1)
        this.state.warning = true;
      else
        Actions.rideConfirmation({eventID: this.props.eventID, phoneNumber: this.props.phoneNumber, name: this.props.name, pickup: this.state.pickup, dropoff: this.state.dropoff, numRiders: this.state.numRiders, comment: this.state.comment});
    }

    function WarningMessage(props) {
      if (props.warning){
        return(
          <Text>
            Some fields are incorrect. Please make sure you have a valid number of passengers and all required input fields have values.
          </Text>);
      }
      else
        return (<Text></Text>);
    }

    return (
      <View style={styles.container}>
        <View></View>
        <View style={styles.org}>
          <Text style={styles.welcome}> Org. Name </Text>
        </View>
        <View style={styles.inputs}>
          {/*Input boxes for each requested field*/}
          <Text>From: </Text>
          <TextInput
            style = {styles.inp}
            placeholder = 'from'
            onChangeText={(text) => this.setState({pickup: text})}/>
          <Text>To: </Text>
          <TextInput
            style = {styles.inp}
            placeholder = 'To'
            onChangeText={(text) => this.setState({dropoff: text})}/>
          <Text>Number of Passengers: </Text>
          <TextInput
            style = {styles.inp}
            keyboardType = 'numeric'
            defaultValue = '1'
            placeholder = '# of People'
            onChangeText={(text) => this.setState({numRiders: text})}/>
          <Text>Comment for Driver:</Text>
          <TextInput
            style = {styles.inp}
            multiline = {true}
            numberOfLines = {4}
            placeholder = 'Comment for Driver (Optional)'
            onChangeText={(text) => this.setState({comment: text})}/>
        </View>
        <WarningMessage warning={this.state.warning}/>
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

RequestRide.propTypes = {
  eventID: PropTypes.string.isRequired,
}

export default RequestRide;
