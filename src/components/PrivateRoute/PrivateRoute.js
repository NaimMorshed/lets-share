import { useContext } from 'react';
import { UserContext } from '../../App';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const [
        auth, setAuth,
        modalOpen, setModalOpen,
        loginState, setLoginState,
        dialogBox, setDialogBox,
        backdrop, setBackdrop
    ] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;