import firebase from 'firebase';

const firebaseConfig = {
  // your firebase config
  // More info here: https://support.google.com/firebase/answer/7015592?hl=en
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
