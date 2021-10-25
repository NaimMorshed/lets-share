import { firebaseConfig } from './Config';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);