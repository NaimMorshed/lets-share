import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { UserContext } from '../../App';

export default function SimpleBackdrop() {
    const [
        auth, setAuth,
        modalOpen, setModalOpen,
        loginState, setLoginState,
        dialogBox, setDialogBox,
        backdrop, setBackdrop
    ] = React.useContext(UserContext);

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdrop}
            >
                <CircularProgress color="inherit" />
                <span className="ml-2 text-lg">Please wait</span>
            </Backdrop>
        </div>
    );
}