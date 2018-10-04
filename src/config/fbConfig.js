import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDPYShoU6GIejgciMJgWml1avwjDe7qzXo",
  authDomain: "jerry-plan.firebaseapp.com",
  databaseURL: "https://jerry-plan.firebaseio.com",
  projectId: "jerry-plan",
  storageBucket: "jerry-plan.appspot.com",
  messagingSenderId: "887322610547"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;