import firebase from './firebase'
import { eventChannel, END } from 'redux-saga'
// Create a firebase database object
const database = firebase.database();

// Create a redux-saga event channel that listens for the given type on the given path
export function createEventChannel(path, type = 'value') {
    const listener = eventChannel(
        emit => {
            database.ref(path)
            .on(
                type,
                data => emit(data.val())
            );
            return () => database.ref(path).off(listener);
        }
    );
    return listener;
};

// Create a function that inserts an item into the database
export function push(path, item) {
    const newItemRef = database.ref(path).push();
    return newItemRef.set(item);
}

export function verifyData(path){
  var ref = database.ref(path);
  return new Promise( (resolve, reject) => {
    ref.once("value", resolve , reject);
});
}

// Takes a path to subscribe to
// Returns a function that asks for two callbacks
export function sync(path){
  var ref = database.ref(path);
  return (resolve, reject) => {ref.on("value", resolve , reject)}
}

// Return a promise that resolves once the database returns the requested subtree
export function getAll(path){
  var ref = database.ref(path);
  return new Promise( (resolve, reject) => {
    ref.once("value", resolve , reject);
  });
}

export default firebase
