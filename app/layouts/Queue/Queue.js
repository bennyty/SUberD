import React, { Component } from 'react';
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

class RideElement extends Component{
  render(){
    const goToRide = () => Actions.ride({all: this.props});
    return(
      <TouchableHighlight 
      onPress = {goToRide}>
        <View style={styles.queueElement}>
          <View style={styles.elementRow}>
            <Text>{this.props.from}</Text>
            <Text>{this.props.name}</Text>
          </View>
          <View style={styles.elementRow}>
            <Text>{this.props.to}</Text>
            <Text>{this.props.numPassengers}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

class Queue extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {"from":"1501 Sage Ave", "to":"LXA", "name":"Jim Thorpe", "phone":"6312523291", "numPassengers":5, "comment":"Thanks!"}, {"from":"Pikes", "to":"Ben's Apartment", "name":"Ben Espey", "phone":"1234566543", "numPassengers":1, "comment":""}
      ])
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

export default Queue;
