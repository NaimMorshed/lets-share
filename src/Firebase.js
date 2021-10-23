import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from "./App";

const firebaseConfig = {
    apiKey: "AIzaSyBh_0-H6fxK-SMHfQ4oYU3c-PQmlf_2T6U",
    authDomain: "lets-share-43e66.firebaseapp.com",
    projectId: "lets-share-43e66",
    storageBucket: "lets-share-43e66.appspot.com",
    messagingSenderId: "716638176674",
    appId: "1:716638176674:web:79dc7288d655d5c94edefb"
};

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();


// export const googleSignIn = () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();

//     signInWithPopup(auth, provider)
//         .then((result) => {
//             const user = result.user;
//             FirebaseComp(user.email, user.displayName, user.photoURL);
//         })
//         .catch((error) => {
//             const errorMessage = error.message;
//             alert(errorMessage);
//         });
// }


export const Firebase = () => {
    const [auth, setAuth] = useContext(UserContext);

    return (() => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setAuth({
                    state: true,
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    });
}