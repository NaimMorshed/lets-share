import { useState } from 'react';
import { storage } from './firebase';

export default function StorageUpload() {
    const [images, setImages] = useState(null);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImages(e.target.files[0]);
        }
    }

    const handleSubmit = () => {
        const uploadTask = storage.ref(`images/${images.name}`).put(images);
        uploadTask.on(
            'state_changed',
            snapshot => { },
            error => { console.log(error) },
            () => {
                storage
                    .ref('images')
                    .child(images.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                    })
            }
        )
    }


    return (
        <div className="App">
            <div className="App-header">
                <input
                    className="mb-4"
                    type="file"
                    onChange={handleChange}
                />
                <button
                    className="bg-green-800 rounded px-3 py-2"
                    onClick={handleSubmit}
                >
                    Upload
                </button>
            </div>
        </div>
    )
}
