import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { UserContext } from '../../App';
import ImageUploading from 'react-images-uploading';

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

export const ModalUi = ({ props }) => {
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth, modalOpen, setModalOpen] = useContext(UserContext);
    const handleClose = () => setModalOpen(false);

    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList);
        setImages(imageList);
    };

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

                    {/* ///////////////////////////////////////////// */}
                    <div className="App bg-white rounded-lg p-3">
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                <div className="upload__image-wrapper">
                                    <button
                                        className="bg-green-600 text-white px-5 py-2"
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Click or Drop here
                                    </button>
                                    &nbsp;
                                    {
                                        images.length !== 0 &&
                                        <button
                                            className="bg-red-600 text-white px-5 py-2"
                                            onClick={onImageRemoveAll}
                                        >
                                            Remove all images
                                        </button>
                                    }

                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item bg-gray-300 m-4 rounded-lg flex items-center flex-col">
                                            <img
                                                className="m-3 rounded"
                                                src={image['data_url']}
                                                alt=""
                                                width="100"
                                            />
                                            <div className="image-item__btn-wrapper mb-3">
                                                <button
                                                    className="bg-green-400 px-3 py-1"
                                                    onClick={() => onImageUpdate(index)}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    className="bg-red-400 px-3 py-1"
                                                    onClick={() => onImageRemove(index)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                    {/* ///////////////////////////////////////////// */}

                    <div className="flex justify-center mt-5">
                        <button className="bg-gray-600 text-white px-3 py-1 rounded-lg">Upload</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}