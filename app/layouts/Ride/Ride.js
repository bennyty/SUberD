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

class ExternalLink extends Component {
  
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
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height:100}}></View>
        <View style={styles.info}>
          <Text>Name: {this.props.all.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>Number: </Text>
            <ExternalLink textLink={this.props.all.phone}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>From: </Text>
            <ExternalLink textLink="1501 Sage Ave."/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>To: </Text>
            <ExternalLink textLink="LXA"/>
          </View>
          <Text>Passengers: {this.props.all.numPassengers}</Text>
          <Text>Queue Spot: {Number(this.props.all.index)+1}</Text>
          <Text>DriveTime: </Text>
          <Text>Comment: {this.props.all.comment}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableHighlight 
            style = {styles.pickup}>
            <Text>Pick up</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style = {styles.deny}>
            <Text>Deny :(</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Ride;