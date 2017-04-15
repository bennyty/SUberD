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
       fromAddress: '',
       toAddress: '',
       numberPassengers: '',
       comment: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <View style={styles.org}>
          <Text style={styles.welcome}> Org. Name </Text>
        </View>
        <View style={styles.inputs}>
          {/*Input boxes for each requested field*/}
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
        {/*Button for submitting the info*/}
        {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
        <TouchableHighlight 
        style = {styles.submit}
        onPress = {() => this.props.onSubmitClick(this.state.fromAddress, this.state.toAddress)}>
          <Text> Submit </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

RequestRide.propTypes = {
  onSubmitClick: PropTypes.func.isRequired
}

export default RequestRide;
