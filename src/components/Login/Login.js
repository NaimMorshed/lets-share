import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Firebase from '../../Firebase/Firebase';

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth, modalOpen, setModalOpen, loginState, setLoginState, dialogBox, setDialogBox] = useContext(UserContext);

    const formSubmit = event => {
        event.preventDefault();
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
                        onClick={() => setLoginState('google')}
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
            <Firebase />
        </div>
    );
};

export default Login;