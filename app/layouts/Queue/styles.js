import { StyleSheet } from 'react-native';

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
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
