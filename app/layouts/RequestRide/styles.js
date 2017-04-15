import { StyleSheet } from 'react-native';

//Stylesheet for specifying component layout and visuals
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#72EB90',
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  inp: {
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1,
      backgroundColor: 'white',
   },
  org: {
    justifyContent:'flex-start',
    flexDirection: 'row',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputs: {
    justifyContent: 'flex-start',
    backgroundColor: 'powderblue',
    width: 300,
    height: 300,
  },
  submit: {
      backgroundColor: '#FFC900',
      padding: 10,
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
});