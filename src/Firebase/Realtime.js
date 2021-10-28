import { firebaseConfig } from './Config';
import 'firebase/compat/database';
import firebase from 'firebase/compat/app';

firebase.initializeApp(firebaseConfig);

const realtimeDB = firebase.database();

export { realtimeDB, firebase as default };