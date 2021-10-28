import { firebaseConfig } from './Config';
import { getDatabase, ref, set } from 'firebase/compat/database';
import firebase from 'firebase/compat/app';

firebase.initializeApp(firebaseConfig);

const realtimeDb = getDatabase();

export { realtimeDb, ref, set, firebase as default };