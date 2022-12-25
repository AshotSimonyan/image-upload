import React, {useEffect, useState} from 'react';
import {formatBytes, getDimensions, getMegapixel} from "../helpers/utils";
import {downloadFile} from "../api";

const Preview = ({imageFile, fileId, onDelete}) => {
    const [imageInfo, setImageInfo] = useState({});

    useEffect(() => {
        const reader = new FileReader();
        reader.onload = e => {
            const {result} = e.target;
            const img = new Image();
            img.src = result;
            img.onload = function () {
                setImageInfo({
                    name: imageFile.name,
                    type: imageFile.type,
                    size: formatBytes(imageFile.size),
                    dimensions: getDimensions(this.height, this.width),
                    megapixel: getMegapixel(this.height, this.width),
                    src: result
                });
            }
        };
        reader.readAsDataURL(imageFile);
    }, [imageFile]);

    const {name, type, size, dimensions, megapixel, src} = imageInfo;
    const handleDownload = async () => {
        const blob = await downloadFile(imageFile.name, fileId);
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = name;
        a.click();
    }

    return (
        <div className='preview'>
            {imageInfo && <>
                <div className="preview-left">
                    <div className='preview-img-wrapper'>
                        <img className='preview-img' src={src} alt={name}/>
                        {fileId && <button className="placeholder" onClick={handleDownload}>
                            <img src="icons/download-placeholder.svg" alt=""/>
                        </button>}
                    </div>
                </div>
                <div className="preview-right">
                    <div className='preview-data'>
                        <div className='image-desc'>
                            <h5 className='title'>Image Name</h5>
                            <p className='truncate'>{name}</p>
                        </div>
                        <div className='image-desc'>
                            <h5 className='title'>Image Type</h5>
                            <p>{type}</p>
                        </div>
                        <div className='image-desc'>
                            <h5 className='title'>Image Size</h5>
                            <p>{size}</p>
                        </div>
                        <div className='image-desc'>
                            <h5 className='title'>Image Dimensions</h5>
                            <p>{dimensions}</p>
                        </div>
                        <div className='image-desc'>
                            <h5 className='title'>Image Megapixels</h5>
                            <p>{megapixel}</p>
                        </div>

                        <div className="preview-button-group">
                            {fileId && <button className='icon-btn' onClick={handleDownload}>
                                <img src="/icons/download.svg" alt="Download"/>
                            </button>}
                            <button className='icon-btn delete' onClick={onDelete}>
                                <img src="/icons/delete.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>

    );
};

export default Preview;
