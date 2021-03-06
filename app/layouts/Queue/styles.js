import { StyleSheet } from 'react-native';

//Stylesheet which gives the visual properties 
//and layout formats of each component
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#72EB90',
  },
  estimates: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  estimate: {
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
  queueTable: {
    width: 300,
    height: 600,
    backgroundColor: 'powderblue',
  },
  queueElement: {
    backgroundColor: 'white',
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  elementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inp: {
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1,
      backgroundColor: 'white',
   },
   submit: {
      backgroundColor: '#FFC900',
      padding: 10,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
