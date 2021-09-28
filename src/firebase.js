import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCjg6_dBLBZ-X0hti9OWPgCCxUvmr1iiE",
    authDomain: "pi-pronadikucnupomocnicu-1fb5e.firebaseapp.com",
    projectId: "pi-pronadikucnupomocnicu-1fb5e",
    storageBucket: "pi-pronadikucnupomocnicu-1fb5e.appspot.com",
    messagingSenderId: "151998977559",
    appId: "1:151998977559:web:6f8a19da854c1091616e52"
  };
  
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);

  export {
      firebase,
  }