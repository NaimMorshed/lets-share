import { firebaseConfig } from './Config';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

firebase.initializeApp(firebaseConfig);

const firestoreDB = firebase.firestore();

export { firestoreDB, firebase as default };