import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { UserContext } from '../../App';
import ImageUploading from 'react-images-uploading';
import { storage } from '../../Firebase/Storage';
import { firestoreDB } from '../../Firebase/Firestore';
import { realtimeDB } from '../../Firebase/Realtime';
import SimpleBackdrop from './SimpleBackdrop';


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
    const [
        auth, setAuth,
        modalOpen, setModalOpen,
        dialogBox, setDialogBox,
        backdrop, setBackdrop
    ] = useContext(UserContext);

    const captionRef = React.useRef(null);

    const handleClose = () => setModalOpen(false);

    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };

    const firestorePush = (url) => {
        firestoreDB.collection("Public-post")
            .add({
                userName: auth.name,
                userEmail: auth.email,
                userPhoto: auth.photo,
                caption: captionRef.current.value,
                image: url,
                postingDate: `${getCurrentDate()} at `,
                postingTime: getCurrentTime(),
                likes: 0,
                dislikes: 0,
                comment: 0,
            })
            .then(docRef => {
                setBackdrop(false);
                console.log("Document written with ID: ", docRef.id);
                setModalOpen(false);
            })
            .catch(error => {
                setBackdrop(false);
                console.error("Error adding document: ", error);
                setModalOpen(false);
            });
    }

    const realtimePush = (url) => {
        const parent = realtimeDB.ref('Public-post');
        const child = {
            userName: auth.name,
            userEmail: auth.email,
            userPhoto: auth.photo,
            caption: captionRef.current.value,
            image: url,
            postingDate: `${getCurrentDate()} at `,
            postingTime: getCurrentTime(),
            likes: 0,
            dislikes: 0,
            comment: 0,
        }
        parent.push(child);
        setBackdrop(false);
        setModalOpen(false);
    }

    const publish = () => {
        setBackdrop(true);
        const uploadTask = storage.ref(`Public-post/${auth.email}/${images[0].file.name}`).put(images[0].file);
        uploadTask.on(
            'state_changed',
            snapshot => { },
            error => {
                setBackdrop(false);
                console.log(error)
            },
            () => {
                storage
                    .ref(`Public-post/${auth.email}`)
                    .child(images[0].file.name)
                    .getDownloadURL()
                    .then(url => {
                        // firestorePush(url);
                        realtimePush(url);
                    })
            }
        )
    }

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
                        <textarea
                            ref={captionRef}
                            className="focus:outline-none rounded-lg p-3"
                            cols="50" rows="5"
                            placeholder="Enter caption here">
                        </textarea>
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
                                    {
                                        images.length === 0 ?
                                            <button
                                                className="bg-green-600 text-white px-5 py-2"
                                                style={isDragging ? { color: 'red' } : undefined}
                                                onClick={onImageUpload}
                                                {...dragProps}
                                            >
                                                Click or Drop here
                                            </button>
                                            :
                                            <button
                                                className="bg-green-600 text-white px-5 py-2"
                                                style={isDragging ? { color: 'red' } : undefined}
                                                onClick={onImageUpload}
                                                {...dragProps}
                                            >
                                                Add more images
                                            </button>
                                    }
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
                        <button onClick={publish} className="bg-gray-600 text-white px-3 py-1 rounded-lg">
                            Upload
                        </button>
                    </div>
                    <SimpleBackdrop />
                </Box>
            </Modal>
        </div>
    );
}



const getCurrentTime = () => {
    const today = new Date();
    return today.getHours() + ":" + today.getMinutes();
}

const getCurrentDate = () => {

    let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();
    let monthInWord = null;
    switch (month) {
        case 1: monthInWord = 'January'; break;
        case 2: monthInWord = 'February'; break;
        case 3: monthInWord = 'March'; break;
        case 4: monthInWord = 'April'; break;
        case 5: monthInWord = 'May'; break;
        case 6: monthInWord = 'June'; break;
        case 7: monthInWord = 'July'; break;
        case 8: monthInWord = 'August'; break;
        case 9: monthInWord = 'September'; break;
        case 10: monthInWord = 'October'; break;
        case 11: monthInWord = 'November'; break;
        case 12: monthInWord = 'December'; break;
        default: break;
    }

    return `${date} ${monthInWord}, ${year}`
}