import React, { Component, PropTypes } from 'react';
import styles from './styles';
import {Actions} from 'react-native-router-flux'
import { Container, Content, Item, Input, InputGroup, Button, Icon, Header, Title, Text, Form, Grid, Row} from 'native-base';
import { dispatch } from 'redux'

class RiderMain extends Component {
	constructor() {
		super()
		//Sets the state of the component
		this.state = {
			 eventID: '',
		}
	}

	render() {
		return (
			<Container>
				<Header>
					<Button>
						<Icon />
					</Button>
					<Title>Potato</Title>
					 <Button>
						<Icon />
					</Button>
				</Header>
				<Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
					<Grid style={{alignItems: 'center'}}>
						<Row size={1}>
							<Text>To request a ride, enter the Event ID of your sober driver below</Text>
						</Row>
						<Row size={2}>
							<Form>
								<Item rounded>
									<Input placeholder="Ask your event coordinator for a Shotgun Event ID" />
								</Item>
							</Form>
						</Row>
						<Row size={1}>
							<Button rounded success>
								<Text>Success</Text>
							</Button>
						</Row>
					</Grid>
				</Content>
			</Container>
			// <View style={styles.container}>
			//	 <View></View>
			//	 <Text style={styles.instruction}> To request a ride, enter the Event ID of your sober driver below</Text>
			//	 <View style={styles.inputs}>
			//		 {/*Input boxes for each requested field*/}
			//		 <TextInput
			//			 style = {styles.inp}
			//			 placeholder = 'Event ID'
			//			 onChangeText={(text) => this.setState({eventID: text})}/>
			//	 </View>
			//	 {/*Button for submitting the info*/}
			//	 {/*onPress() calls the submitClick() function in the VisibleRideRequest class*/}
			//	 <TouchableHighlight
			//	 style = {styles.submit}
			//	 onPress = {() => this.props.onRequestRideClick(this.state.eventID)}>
			//		 <Text> Request Ride </Text>
			//	 </TouchableHighlight>
			// </View>
		);
	}
}

RiderMain.propTypes = {
	onRequestRideClick: PropTypes.func.isRequired
}

export default RiderMain;
