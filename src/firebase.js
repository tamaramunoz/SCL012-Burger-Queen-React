import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAzAjKrm9xUdI9w3zWLC-hAAMLLGNjrEKI",
  authDomain: "burger-queen-react-95a4d.firebaseapp.com",
  databaseURL: "https://burger-queen-react-95a4d.firebaseio.com",
  projectId: "burger-queen-react-95a4d",
  storageBucket: "burger-queen-react-95a4d.appspot.com",
  messagingSenderId: "440095406666",
  appId: "1:440095406666:web:6ae67500a81922e4ba04b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { firebase, db, auth }
