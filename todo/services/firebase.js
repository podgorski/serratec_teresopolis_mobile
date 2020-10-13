import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDJ7q_OobYb2wRYCk9Fe6HxI0OefMyzIIU",
  authDomain: "serratec-mobile.firebaseapp.com",
  databaseURL: "https://serratec-mobile.firebaseio.com",
  projectId: "serratec-mobile",
  storageBucket: "serratec-mobile.appspot.com",
  messagingSenderId: "574819554000",
  appId: "1:574819554000:web:384b98ea307cd3999fc4d5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);