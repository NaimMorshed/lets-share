import { firebaseConfig } from './Config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };