import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCRLZ89Ja-6aEA26dDF9B_llzQ8iiEqkj4",
    authDomain: "shotgunrpi.firebaseapp.com",
    databaseURL: "https://shotgunrpi.firebaseio.com",
    storageBucket: "shotgunrpi.appspot.com",
    messagingSenderId: "1704066494"
  };
  firebase.initializeApp(config);
  export default firebase;
