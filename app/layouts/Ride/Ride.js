import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  TouchableHighlight,
  Linking,
  Text,
  View
} from 'react-native';
import styles from './styles';

//Class which handles the hyperlinks to maps api and phone calls
class ExternalLink extends Component {
  //Opens the link, if possible.
  handleClick = () => {
    Linking.canOpenURL('tel:6312523291').then(supported => {
      if (supported) {
        Linking.openURL('tel:6312523291');
      } else {
        console.log('Don\'t know how to open URI: ');
      }
    });
  };

  render() {
    //Creates a clickable text
    return (
        <TouchableHighlight
        style = {styles.textLink}
        onPress = {this.handleClick}>
          <Text>{this.props.textLink}</Text>
        </TouchableHighlight>
    );
  }
}

class Ride extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inRoute: false
    }
  }

  render() {

    const onPickupClick = () => {
      this.state.inRoute = true;
    }
    const onCompleteClick = () => {
      alert("complete");
    }
    const onDenyClick = () => {
      alert("deny");
    }
    const onCancelClick = () => {
      
    }

    function DisplayButtons(props) {
      if (props.inRoute){
        return(
          <View>
            <TouchableHighlight 
              onPress = {() => onCompleteClick()}
              style = {styles.pickup}>
              <Text>Ride Complete!</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress = {() => onCancelClick()}
              style = {styles.deny}>
              <Text>Cancel Ride</Text>
            </TouchableHighlight>
          </View>
        );
      }
      else{
        return(
          <View>
            <TouchableHighlight 
              onPress = {() => onPickupClick()}
              style = {styles.pickup}>
              <Text>Pick up</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress = {() => onDenyClick()}
              style = {styles.deny}>
              <Text>Deny :(</Text>
            </TouchableHighlight>
          </View>
        );
      }
    }

    return (
      <View style={styles.container}>
        <View style={{height:100}}></View>
        <View style={styles.info}>
          {/*Gives all information about the ride*/}
          {/*Name*/}
          <Text>Name: {this.props.all.name}</Text>
          {/*Phone number*/}
          <View style={{flexDirection: 'row'}}>
            <Text>Number: </Text>
            <ExternalLink textLink={this.props.all.phoneNumber}/>
          </View>
          {/*Pick up location*/}
          <View style={{flexDirection: 'row'}}>
            <Text>From: </Text>
            <ExternalLink textLink={this.props.all.pickup}/>
          </View>
          {/*Drop off location*/}
          <View style={{flexDirection: 'row'}}>
            <Text>To: </Text>
            <ExternalLink textLink={this.props.all.dropoff}/>
          </View>
          {/*Passenger, queue spot, drive time, and comment*/}
          <Text>Passengers: {this.props.all.numRiders}</Text>
          <Text>Queue Spot: {Number(this.props.all.index)+1}</Text>
          <Text>Drive time: {(Number(this.props.all.index)+1)*10} minutes</Text>
          <Text>Comment: {this.props.all.comment}</Text>
        </View>
        <View style={styles.buttons}>
          {/*Button to choose to pick up ride*/}
          <DisplayButtons inRoute={this.state.inRoute}/>
        </View>
      </View>
    );
  }
}

export default Ride;
