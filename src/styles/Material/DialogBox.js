import * as React from 'react';
import { UserContext } from '../../App';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogBox = ({ props }) => {
    // eslint-disable-next-line no-unused-vars
    const [
        auth, setAuth, 
        modalOpen, setModalOpen, 
        dialogBox, setDialogBox
    ] = React.useContext(UserContext);

    const handleClose = () => {
        setDialogBox({
            state: false,
            header: null,
            body: null
        })
    };

    return (
        <div>
            <Dialog
                open={dialogBox.state}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {dialogBox.header}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogBox.body}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DialogBox;