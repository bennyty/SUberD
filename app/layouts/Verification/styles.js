import { StyleSheet } from 'react-native';

//Stylesheet for specifying component layout and visuals
export default StyleSheet.create({
	container: {
    	flex: 1,
    	justifyContent: 'space-between',
    	alignItems: 'center',
    	backgroundColor: '#72EB90',
  	},
  	submit: {
      	backgroundColor: '#FFC900',
      	padding: 10,
  	},
  	heading: {
    	justifyContent:'flex-start',
    	flexDirection: 'row',
  	},
  	headingText: {
  		fontSize: 16,
    	textAlign: 'left',
  	},
  	inp: {
     	margin: 15,
      	height: 40,
      	borderColor: 'grey',
      	borderWidth: 1,
      	backgroundColor: 'white',
   	},
  	inputs: {
    	justifyContent: 'flex-start',
    	backgroundColor: 'powderblue',
    	width: 300,
    	height: 70,
  	},
});