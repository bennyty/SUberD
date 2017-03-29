import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux'


class RequestRide extends Component {
  constructor() {
    super()
    this.state = {
       fromAddress: '',
       toAddress: '',
       numberPassengers: '',
       comment: ''
    }
  }
  //() => alert('from: ' + this.state.fromAddress + '\nto: ' + this.state.toAddress)}>
  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <View style={styles.org}>
          <Text style={styles.welcome}> Org. Name </Text>
        </View>
        <View style={styles.inputs}>
          <TextInput
            style = {styles.inp}
            placeholder = 'from'
            onChangeText={(text) => this.setState({fromAddress: text})}/>
          <TextInput
            style = {styles.inp}
            placeholder = 'To'
            onChangeText={(text) => this.setState({toAddress: text})}/>
          <TextInput
            style = {styles.inp}
            placeholder = '# of People'
            onChangeText={(text) => this.setState({numberPassengers: text})}/>
          <TextInput
            style = {styles.inp}
            multiline = {true}
            numberOfLines = {4}
            placeholder = 'Comment for Driver (Optional)'
            onChangeText={(text) => this.setState({comment: text})}/>
        </View>
        <TouchableHighlight 
        style = {styles.submit}
        onPress = {Actions.queue}>
          <Text> Submit </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default RequestRide;