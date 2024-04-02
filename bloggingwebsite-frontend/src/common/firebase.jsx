// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzLKamCmEyTXTAzD2Jk1HmMVvvaB8pmVs",
  authDomain: "contents-hub-9375d.firebaseapp.com",
  projectId: "contents-hub-9375d",
  storageBucket: "contents-hub-9375d.appspot.com",
  messagingSenderId: "835538068793",
  appId: "1:835538068793:web:a6cf40164e6aea108c74e8",
  measurementId: "G-Z0WD331HL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//esetting up google authentication

const provider=new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async() => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err)=> {
        console.log(err);
    })

    return user;
}