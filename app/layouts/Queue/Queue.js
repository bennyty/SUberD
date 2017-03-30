import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  ListView,
  TextInput,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux'
import Reactotron from 'reactotron-react-native'

class RideElement extends Component{
  render(){
    const goToRide = () => Actions.ride({all: this.props});
    return(
      <TouchableHighlight 
      onPress = {goToRide}>
        <View style={styles.queueElement}>
          <View style={styles.elementRow}>
            <Text>{this.props.dropoff}</Text>
            <Text>{this.props.user.first_name} {this.props.user.last_name}</Text>
          </View>
          <View style={styles.elementRow}>
            <Text>{this.props.pickup}</Text>
            <Text>{this.props.num_passengers}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

class Queue extends Component {
  constructor(props) {
    super(props)
    Reactotron.log({string:props})
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.rides)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 100}}></View>
        <View style={styles.estimates}>
          <Text style={styles.estimate}>Number of Rides: {this.state.dataSource.getRowCount()}</Text>
          <Text style={styles.estimate}>Total Estimated Time: {this.state.dataSource.getRowCount() * 10} minutes</Text>
        </View>
        <View style={styles.queueTable}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionId, rowId) => <RideElement secId={sectionId} index={rowId} {...rowData} />} 
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />} />
        </View>
      </View>
    );
  }
}

Queue.propTypes = {
  rides: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string,
    num_passengers: PropTypes.number.isRequired,
    pickup: PropTypes.string.isRequired,
    dropoff: PropTypes.string.isRequired,
    user: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired}).isRequired
  }).isRequired).isRequired
}

export default Queue;