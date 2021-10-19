import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import {createContext, useState} from "react";
export const UserContext = createContext();

const App = () => {
    const [auth, setAuth] = useState({
        state: false,
        email: null,
        name: null,
        photo: null
    });

    const [modalOpen, setModalOpen] = useState(false);

  return (
    <UserContext.Provider value={[auth, setAuth, modalOpen, setModalOpen]}>
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

                <Route exact path="*">
                    <Login />
                </Route>
            </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
