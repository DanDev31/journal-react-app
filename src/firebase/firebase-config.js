import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
 

const firebaseConfig = {
    apiKey: "AIzaSyDApIW_KGjQPN-X67Gx9w_HrZlLFZLIt7o",
    authDomain: "journal-react-app-d73f3.firebaseapp.com",
    projectId: "journal-react-app-d73f3",
    storageBucket: "journal-react-app-d73f3.appspot.com",
    messagingSenderId: "1066999296345",
    appId: "1:1066999296345:web:f720699106278e98e49c48"
  };


  const app = initializeApp(firebaseConfig);


  export const auth = getAuth(); //Allows the authorization to login with an account
  export const provider = new GoogleAuthProvider(); //Create a provider to login with google

  export const db = getFirestore(); //Initialize the firestore db
  