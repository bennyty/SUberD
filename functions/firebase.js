import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBAyqbysHlZe7T3GlxBT4e8TEHSRNn1H98",
    authDomain: "shotgunrpi-6ff34.firebaseapp.com",
    databaseURL: "https://shotgunrpi-6ff34.firebaseio.com",
    storageBucket: "shotgunrpi-6ff34.appspot.com",
    messagingSenderId: "321017898613"
  };
  firebase.initializeApp(config);
  export default firebase;
