import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [
        auth, setAuth,
        modalOpen, setModalOpen,
        dialogBox, setDialogBox,
        backdrop, setBackdrop
    ] = useContext(UserContext);

    return (
        <div className="App">
            <div className="App-header">
                <img className="border-2 rounded-full mb-4" src={auth.photo} alt="" width="100px" height="100px" />
                <p className="text-3xl mb-2">{auth.name}</p>
                <p className="mb-5">{auth.email}</p>
                <Link className="bg-gray-600 px-3 py-1 rounded-lg" to={"/home"}>Proceed</Link>
            </div>
        </div>
    );
};

export default Profile;