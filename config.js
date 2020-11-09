import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD3FpqWuARIlPwcfW1Y_ivk10SPFIfqFJE",
  authDomain: "bsapp-84d3e.firebaseapp.com",
  databaseURL: "https://bsapp-84d3e.firebaseio.com",
  projectId: "bsapp-84d3e",
  storageBucket: "bsapp-84d3e.appspot.com",
  messagingSenderId: "464811367",
  appId: "1:464811367:web:01ece10a45c53065c5ebc2",
  measurementId: "G-32ZK43JKZQ"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
