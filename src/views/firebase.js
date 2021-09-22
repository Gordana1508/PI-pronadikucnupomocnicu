import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCszxfHnvIg5nBK0cFwJeTCwp5FcXt8ZbY",
    authDomain: "pi-pronadikucnupomocnicu-bf5fd.firebaseapp.com",
    projectId: "pi-pronadikucnupomocnicu-bf5fd",
    storageBucket: "pi-pronadikucnupomocnicu-bf5fd.appspot.com",
    messagingSenderId: "367001271765",
    appId: "1:367001271765:web:582929a4f0ae7d77be115c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export{
      firebase,
  }