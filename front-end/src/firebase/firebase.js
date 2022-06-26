import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAN6DmQ0n_k2WhDTfrWtpdZ76POlsGeZrc",
  authDomain: "postiid.firebaseapp.com",
  projectId: "postiid",
  storageBucket: "postiid.appspot.com",
  messagingSenderId: "103233740674",
  appId: "1:103233740674:web:e1c2f1ecc4f1a5d5d7b99b",
  measurementId: "G-LC5XYNZF82",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
export default database;
