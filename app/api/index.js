import firebase from './firebase'
import { eventChannel, END } from 'redux-saga'
// create a firebase database object
const database = firebase.database();

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

// create a function that inserts an item into the database
export function push(path, item) {
    const newItemRef = database.ref(path).push();
    return newItemRef.set(item);
}

export function set(path, item) {
    const newItemRef = database.ref(path).set(item);
    return newItemRef;
}

export function remove(path) {
    const newItemRef = database.ref(path).remove();
    return newItemRef;
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

export function getAll(path){
  var ref = database.ref(path);
  return new Promise( (resolve, reject) => {
    ref.once("value", resolve , reject);
  });
}

export default firebase
