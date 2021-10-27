import { firebaseConfig } from './Config';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase as default };