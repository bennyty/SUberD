import firebase from './firebase'

// create a firebase database object
const database = firebase.database();

// create a function that inserts an item into the database
export function push(path, item) {
    const newItemRef = database.ref(path).push();
    return newItemRef.set(item);
}


export function getAll(path){
  var ref = database.ref(path);
  return new Promise( (resolve, reject) => {
    ref.once("value", resolve , reject);
  });
}

export default firebase
