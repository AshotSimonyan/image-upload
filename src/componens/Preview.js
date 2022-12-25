import React from 'react';

const Preview = ({image, setImage}) => {

    const handleDelete = () => {
        setImage({})
    }
    return (
        <div className='preview'>
            <div className="preview-left">
                <a className='preview-img-wrapper' href={image.src} download={image.name}>
                    <img className='preview-img' src={image.src} alt={image.name}/>
                    <span className="placeholder">
                        <img src="icons/download-placeholder.svg" alt=""/>
                    </span>
                </a>
            </div>
            <div className="preview-right">
                <div className='preview-data'>
                    <div className='image-desc'>
                        <h5 className='title'>Image Name</h5>
                        <p className='truncate'>{image.name}</p>
                    </div>
                    <div className='image-desc'>
                        <h5 className='title'>Image Type</h5>
                        <p>{image.type}</p>
                    </div>
                    <div className='image-desc'>
                        <h5 className='title'>Image Size</h5>
                        <p>{image.size}</p>
                    </div>
                    <div className='image-desc'>
                        <h5 className='title'>Image Dimensions</h5>
                        <p>{image.dimensions}</p>
                    </div>
                    <div className='image-desc'>
                        <h5 className='title'>Image Megapixels</h5>
                        <p>{image.megapixel}</p>
                    </div>

                    <div className="preview-button-group">
                        <a className='icon-btn' href={image.src} download={image.name}>
                            <img src="/icons/download.svg" alt=""/>
                        </a>
                        <button className='icon-btn delete' onClick={handleDelete}>
                            <img src="/icons/delete.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
