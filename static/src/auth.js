// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2SY3gkNRr9quEjFwdbW1oJ_Ucd_fwiCo",
  authDomain: "devjam-daf50.firebaseapp.com",
  databaseURL: "https://devjam-daf50-default-rtdb.firebaseio.com",
  projectId: "devjam-daf50",
  storageBucket: "devjam-daf50.appspot.com",
  messagingSenderId: "381014972193",
  appId: "1:381014972193:web:38290d870f32a681a95060",
  measurementId: "G-2GS3KH99EY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

function createNewUser() {
    var email = "anish.dhandore@gmail.com";
    var password = "test123";
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  }
createNewUser()
