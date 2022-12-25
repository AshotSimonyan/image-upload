import React, {useState} from 'react';

import {validateFile} from "../helpers/utils";

const ImageUpload = ({onChange}) => {
    const [error, setError] = useState();

    const handleChange = e => {
        const [file] = e.target.files;
        if (file) {
            setError(undefined);
            if(!validateFile(file, 'image/jpeg|image/png')) {
                setError('Please upload JPEG or PNG files.');
                return;
            }

            onChange(file);
        }
    };

    return (
        <div className='upload-wrapper'>
            <label htmlFor="image" className={`upload ${error ? 'error' : ''}`}>
                <input
                    id='image'
                    type="file"
                    accept="image/jpeg, image/png"
                    className='upload-input'
                    onChange={handleChange}
                    multiple={false}
                />
                <div className='upload-animated'>
                    <img className='upload-img' src="icons/placeholder.png" alt="upload"/>
                    <span className='text-white-600'>Only .png and .jpg (.jpeg) are supported</span>
                </div>

                <span className='upload-text'>Upload Image</span>
            </label>
            {error && <p className='upload-error error-message'>{error}</p>}
        </div>

    );
};

export default ImageUpload;
