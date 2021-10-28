import { firebaseConfig } from './Config';
import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();

const firebaseAuth = getAuth();
const provider = new GoogleAuthProvider();

export { signInWithPopup, firebaseAuth, provider, firebase as default };