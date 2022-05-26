import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtWd6Mzba8EBcVj--hUD5H9Y0ajfIIWQ8",
  authDomain: "pronadi-kucnu-pomocnicu.firebaseapp.com",
  projectId: "pronadi-kucnu-pomocnicu",
  storageBucket: "pronadi-kucnu-pomocnicu.appspot.com",
  messagingSenderId: "708511985807",
  appId: "1:708511985807:web:3b917a1d29b9211dcc00fa"
};
  
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
    export {
      firebase,
  } 