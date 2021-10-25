import { useEffect } from "react";
import { firebaseConfig } from './Config';
import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";
import DialogBox from "../styles/Material/DialogBox";

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();


const Firebase = () => {
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth, modalOpen, setModalOpen, loginState, setLoginState] = useContext(UserContext);
    const firebaseAuth = getAuth();
    const provider = new GoogleAuthProvider();
    const history = useHistory();

    const googleLogin = () => {
        signInWithPopup(firebaseAuth, provider)
            .then((result) => {
                const user = result.user;
                setAuth({
                    state: true,
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL
                })
                setLoginState(false);
                history.push('/profile');
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                <DialogBox />
                setLoginState(false);
            });
    }

    useEffect(() => {

        loginState === 'google' ? googleLogin() : <></>

    }, [loginState])

    return (
        <>
            <DialogBox />
        </>
    );
}

export default Firebase;