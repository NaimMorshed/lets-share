import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { signInWithPopup, firebaseAuth, provider } from '../../Firebase/GoogleSign';
import DialogBox from '../../styles/Material/DialogBox';

const Login = () => {
    
    const [
        auth, setAuth,
        modalOpen, setModalOpen,
        dialogBox, setDialogBox,
        backdrop, setBackdrop
    ] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const formSubmit = event => {
        event.preventDefault();
    }

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
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;

                errorMessage === "Firebase: Error (auth/popup-closed-by-user)."
                    ? setDialogBox({
                        state: true,
                        header: 'Firebase Authentication',
                        body: 'Authentication cancelled by user, please login first.'
                    })
                    : setDialogBox({
                        state: true,
                        header: 'Firebase Authentication',
                        body: errorMessage
                    });
            });
    }

    return (
        <div className={"App-header"}>
            <form
                onSubmit={formSubmit}
                className="flex flex-col bg-gray-300 px-10 pt-10 pb-5 rounded-lg text-black"
            >
                <input
                    type="text"
                    placeholder={"Enter email"}
                    className="mb-4 rounded-lg px-5 py-1 outline-none"
                />
                <input
                    type="password"
                    placeholder={"Enter password"}
                    className="mb-4 rounded-lg px-5 py-1 outline-none"
                />
                <input
                    type="submit"
                    value="Login"
                    className="mb-4 rounded-lg px-5 py-1 bg-gray-700 text-white"
                />

                <div className="social-div m-auto">
                    <button
                        onClick={googleLogin}
                        className="bg-gray-700 text-white px-3 py-1 rounded m-2"
                    >
                        Google
                    </button>

                    <button
                        className="bg-gray-700 text-white px-3 py-1 rounded m-2"
                    >
                        Facebook
                    </button>
                </div>
            </form>
            <DialogBox />
        </div>
    );
};

export default Login;