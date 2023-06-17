import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuPt8YDKRrp1wbe4G9xDapSbyjAQAEMIQ",
    authDomain: "linkedin-clone-7b0b1.firebaseapp.com",
    projectId: "linkedin-clone-7b0b1",
    storageBucket: "linkedin-clone-7b0b1.appspot.com",
    messagingSenderId: "334848913944",
    appId: "1:334848913944:web:975b03d28372b29e8e896d",
    measurementId: "G-R6WC89SMS8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export const auth = getAuth(firebaseApp);

  export{db};