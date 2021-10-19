import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UserContext } from '../../App';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px',
    border: '0px solid grey',
    backgroundColor: 'rgba(209, 213, 219)',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

export const ModalUi = ({props}) => {
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth, modalOpen, setModalOpen] = useContext(UserContext);
    const handleClose = () => setModalOpen(false);

    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className="text-2xl mb-4">Lets create your post</h1>
                    <div>
                        <textarea className="focus:outline-none rounded-lg p-3" cols="50" rows="5" placeholder="Enter caption here"></textarea>
                    </div>
                    <div>
                        
                    </div>
                </Box>
            </Modal>
        </div>
    );
}