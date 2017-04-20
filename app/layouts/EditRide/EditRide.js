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
import { editRide } from '../../actions'

class EditRide extends Component {
  constructor(props) {
    super(props)
    //Sets the state of the component
    this.state = {
       pickup: this.props.pickup,
       dropoff: this.props.dropoff,
       numRiders: this.props.numRiders,
       comment: this.props.comment,
       warning: false
    }
  }

  render() {
    //Function definition
    const onButtonClick = () => {
      if(this.state.pickup == "" || this.state.dropoff == "" || parseInt(this.state.numRiders) < 1)
        this.state.warning = true;
      else
        Actions.rideEditConfirmation({eventID: this.props.eventID, phoneNumber: this.props.phoneNumber, name: this.props.name, pickup: this.state.pickup, dropoff: this.state.dropoff, numRiders: this.state.numRiders, comment: this.state.comment});
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
          <Text>From:</Text>
          <TextInput
            style = {styles.inp}
            placeholder = {this.props.pickup}
            defaultValue = {this.props.pickup}
            onChangeText={(text) => this.setState({pickup: text})}/>
          <Text>To:</Text>
          <TextInput
            style = {styles.inp}
            placeholder = {this.props.dropoff}
            defaultValue = {this.props.dropoff}
            onChangeText={(text) => this.setState({dropoff: text})}/>
          <Text>Number of Passengers:</Text>
          <TextInput
            style = {styles.inp}
            keyboardType = 'numeric'
            placeholder = {this.props.numRiders}
            defaultValue = {this.props.numRiders}
            onChangeText={(text) => this.setState({numRiders: text})}/>
          <Text>Comment for Driver:</Text>
          <TextInput
            style = {styles.inp}
            multiline = {true}
            numberOfLines = {4}
            placeholder = {this.props.comment}
            defaultValue = {this.props.comment}
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

EditRide.propTypes = {
  eventID: PropTypes.string.isRequired,
}

export default EditRide;
