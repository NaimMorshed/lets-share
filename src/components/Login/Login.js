import React, {useContext} from 'react';
import {UserContext} from '../../App';
import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from '../../firebase.config'
import {useHistory} from "react-router-dom";

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();

const Login = () => {
    const [auth, setAuth] = useContext(UserContext);
    const history = useHistory();

    const formSubmit = event => {
        event.preventDefault();
        alert("Click on Google");
    }

    const googleSignIn = () => {
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
                history.push('/profile');
            }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    return (
        <div className={"App-header"}>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder={"Enter email"}/>
                <input type="password" placeholder={"Enter password"}/>
                <input type="submit" value="Login"/>
            </form>
            <div className="social-div">
                <button onClick={googleSignIn}>Google</button>
                <button>Facebook</button>
            </div>
        </div>
    );
};

export default Login;