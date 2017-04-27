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

//The individual cell on the table
class RideElement extends Component{
  //What is displayed
  render(){
    //Function definition
    const goToRide = () => Actions.ride({all: this.props});

    // Returns a clickable RideElement
    //When clicked it calls the function goToRide()
    return(
      <TouchableHighlight
      onPress = {goToRide}>
        <View style={styles.queueElement}>
          {/*First row of data*/}
          <View style={styles.elementRow}>
            <Text>{this.props.dropoff}</Text>
            <Text>{this.props.name}</Text>
          </View>
          {/*Second row*/}
          <View style={styles.elementRow}>
            <Text>{this.props.pickup}</Text>
            <Text>{this.props.numRiders}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

//Queue contains the entire page of information, including the table
class Queue extends Component {
  constructor(props) {
    super(props)
    //Maps the ride information given from the props to a data structure
    //This ds is given to the ListView class to be displayed as a table
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.rides),
      temp: ''
    }
  }

  componentDidMount(){
    this.props.onStartQueue(this.props.eventID);
  }

  render() {

    const onButtonClick = () => {
      Actions.queue();
    }

    return (
      <View style={styles.container}>
        <View style={{height: 100}}></View>
        {/*Header on the top of the table*/}
        <View style={styles.estimates}>
          <Text style={styles.estimate}>Number of Rides: {this.state.dataSource.getRowCount()}</Text>
          <Text style={styles.estimate}>Total Estimated Time: {this.state.dataSource.getRowCount() * 10} minutes</Text>
        </View>
        {/*The table itself*/}
        <View style={styles.queueTable}>
          {/*Lists the information in rows, where each entry is displayed in its own RideElement*/}
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionId, rowId) => <RideElement secId={sectionId} index={rowId} {...rowData} />}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />} />
        </View>
      </View>
    );
  }
}

//Gives a strict definition to how the format of the input data(props) should be
Queue.propTypes = {
  eventID: PropTypes.string.isRequired,
  rides: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string,
    numRiders: PropTypes.string.isRequired,
    pickup: PropTypes.string.isRequired,
    dropoff: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Queue;
