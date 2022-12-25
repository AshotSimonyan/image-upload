import {useState} from "react";
import ImageUpload from "./componens/ImageUpload";
import Preview from "./componens/Preview";
//<Preview/>
const App = () => {
    // const [image, setImage] = useState({
    //     name: '',
    //     type: '',
    //     size: '',
    //     dimensions: '',
    //     megapixel: '',
    //     src: ''
    // })
    const [image, setImage] = useState({})


    return (
        <div className="app">
            <div className='container-fluid'>
                <div className="app-inner">

                    {
                        !!image.src ? (
                                <Preview image={image} setImage={setImage} />
                        ) :
                            <>
                                <h1>Hi, welcome to fast image uploader</h1>
                                <ImageUpload setImage={setImage}/>
                            </>
                    }
                </div>

            </div>
        </div>
    );
}

export default App;
