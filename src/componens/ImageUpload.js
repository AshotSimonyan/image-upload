import React, {useState} from 'react';
import {formatBytes, getDimensions, getMegapixel} from "../helpers/utils";

const ImageUpload = ({setImage}) => {
    const [error, setError] = useState('')

    const validateFile = (file) => {
        const hasError = !file.type.match('image/jpeg|image/png')
        if (hasError) {
            setError('Please upload JPEG or PNG files.');
            return;
        }
        setError('')
    };

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            validateFile(file)
            const formData = new FormData()
            formData.append('image', file)

            const res = fetch('https://upload.uploadcare.com/base/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryQsb8fVMEU0zxzMSB'
                },
                body: formData,
            })
            console.log(res)
            const reader = new FileReader();
            reader.onload = e => {
                const {result} = e.target
                const img = new Image()
                console.log(e.target)
                img.src = result;
                img.onload = function () {
                    setImage({
                        name: file.name,
                        type: file.type,
                        size: formatBytes(file.size),
                        dimensions: getDimensions(this.height, this.width),
                        megapixel: getMegapixel(this.height, this.width),
                        src: result
                    });
                }
            };
            reader.readAsDataURL(file);
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
                    onChange={handleImageUpload}
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
