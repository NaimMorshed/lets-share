import React from 'react';
import ImageUploading from 'react-images-uploading';

const ImageUpload = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 5;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        // console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App bg-gray-200 p-3">
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
                    // write your building UI
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
                        <button
                            className="bg-red-600 text-white px-5 py-2"
                            onClick={onImageRemoveAll}
                        >Remove all images</button>

                        {imageList.map((image, index) => (
                            <div key={index} className="image-item bg-gray-300 m-4 rounded-lg flex items-center flex-col">
                                <img
                                    className="m-3"
                                    src={image['data_url']}
                                    alt="" width="100"
                                />
                                <div className="image-item__btn-wrapper mb-3">
                                    <button
                                        className="bg-green-400 px-3 py-1"
                                        onClick={() => onImageUpdate(index)}
                                    >
                                        Update</button>
                                    <button
                                        className="bg-red-400 px-3 py-1"
                                        onClick={() => onImageRemove(index)}
                                    >
                                        Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};

export default ImageUpload;