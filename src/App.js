import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { createContext, useState } from "react";
import ImageUpload from './components/Testing/ImageUpload';
import Testing from './components/Testing/Testing';
export const UserContext = createContext();

const App = () => {
    const [auth, setAuth] = useState({
        state: false,
        email: null,
        name: null,
        photo: null
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [loginState, setLoginState] = useState(false);
    const [dialogBox, setDialogBox] = useState({
        state: false,
        header: null,
        body: null
    });

    return (
        <UserContext.Provider
            value={
                [
                    auth, setAuth,
                    modalOpen, setModalOpen,
                    loginState, setLoginState,
                    dialogBox, setDialogBox,
                ]
            }>
            <Router>
                <Switch>
                    
                    <Route exact path="/">
                        <Login />
                    </Route>

                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route exact path="/profile">
                        <Profile />
                    </Route>

                    <Route exact path="/upload">
                        <ImageUpload />
                    </Route>

                    <Route exact path="/testing">
                        <Testing />
                    </Route>

                    <Route exact path="*">
                        <Login />
                    </Route>

                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
