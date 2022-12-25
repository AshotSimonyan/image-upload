import {useState} from "react";

import ImageUpload from "./componens/ImageUpload";
import Preview from "./componens/Preview";
import {uploadFile} from "./api";

const App = () => {
    const [image, setImage] = useState();
    const [fileId, setFileId] = useState();

    const handleDelete = () => {
        setImage(undefined);
    }

    const handleFileChange = async (file) => {
        setImage(file);
        const name = file.name;
        const res = await uploadFile(name, file);
        setFileId(res[name]);
    }

    return (
        <div className="app">
            <div className='container-fluid'>
                <div className="app-inner">

                    {
                        image ? (
                                <Preview imageFile={image} fileId={fileId} onDelete={handleDelete} />
                        ) :
                            <>
                                <h1>Hi, welcome to fast image uploader</h1>
                                <ImageUpload onChange={handleFileChange}/>
                            </>
                    }
                </div>

            </div>
        </div>
    );
}

export default App;
