import React, { useContext } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from '../../firebase.config'
import { useHistory } from "react-router-dom";
import { UserIcon } from '../../assets/HeroIcons';

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();

const Login = () => {
    const [auth, setAuth] = useContext(UserContext);
    const history = useHistory();

    const formSubmit = event => {
        event.preventDefault();
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
            <form onSubmit={formSubmit} className="flex flex-col bg-gray-500 px-10 pt-10 pb-5 rounded-lg text-black">
                {/* <UserIcon /> */}
                <input type="text" placeholder={"Enter email"} className="mb-4 rounded-lg px-5 py-1" />
                <input type="password" placeholder={"Enter password"} className="mb-4 rounded-lg px-5 py-1" />
                <input type="submit" value="Login" className="mb-4 rounded-lg px-5 py-1" />

                <div className="social-div m-auto">
                    <button onClick={googleSignIn} className="bg-gray-700 text-white px-3 py-1 rounded m-2">Google</button>
                    <button className="bg-gray-700 text-white px-3 py-1 rounded m-2">Facebook</button>
                </div>
            </form>
        </div>
    );
};

export default Login;