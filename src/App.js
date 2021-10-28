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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NavBar from './components/NavBar/NavBar';
export const UserContext = createContext();

const App = () => {

    const [auth, setAuth] = useState({
        state: false,
        email: null,
        name: null,
        photo: null
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [dialogBox, setDialogBox] = useState({
        state: false,
        header: null,
        body: null
    });
    const [backdrop, setBackdrop] = useState(false);

    return (
        <UserContext.Provider
            value={
                [
                    auth, setAuth,
                    modalOpen, setModalOpen,
                    dialogBox, setDialogBox,
                    backdrop, setBackdrop
                ]
            }>
            <Router>
                <Switch>
                    
                    <PrivateRoute exact path="/">
                        <Home />
                    </PrivateRoute>

                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <PrivateRoute exact path="/home">
                        <Home />
                    </PrivateRoute>

                    <PrivateRoute exact path="/profile">
                        <Profile />
                    </PrivateRoute>

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
