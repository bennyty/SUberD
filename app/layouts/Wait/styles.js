import { StyleSheet } from 'react-native';

//Stylesheet for specifying component layout and visuals
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#72EB90',
  },
  statsView: {
    alignItems: 'flex-start'
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  stats: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  rideInfo: {
    textDecorationLine: 'underline'
  },
  submit: {
      backgroundColor: '#FFC900',
      padding: 10,
  },
  deny: {
      backgroundColor: '#EF473A',
      padding: 10,
  }
});
