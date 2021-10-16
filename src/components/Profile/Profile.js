import React, { useContext } from 'react';
import {UserContext} from '../../App';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [auth, setAuth] = useContext(UserContext);

    return (
        <div className="App">
            <div className="App-header">
                <p>{auth.name}</p>
                <p>{auth.email}</p>
                <Link to={"/home"}>Proceed</Link>
            </div>
        </div>
    );
};

export default Profile;