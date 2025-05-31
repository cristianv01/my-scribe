import React, {useState} from "react";

const App: React.FC = () =>{ 
    const [selectedFilePath, setFilePath] = useState("")
    const [feedbackMesage, setFeedbackMessage] = useState("")

   
    const handleClick = async () =>{
        setFilePath("")
        setFeedbackMessage("")
        if (window.electronAPI){
            const filePath = await window.electronAPI.selectAudioFile()
            if (filePath){
                setFilePath(filePath)
                setFeedbackMessage("Successfully chose file")
            }else{
                setFeedbackMessage("File cancelled")
            }
        }
    };

    return(
        <div className="parent">
            <div>
                <h1>Hello, LocalScribe!</h1>
            </div>
            <div className="selector">
                <button onClick={handleClick}>Select Audio File</button>
                {selectedFilePath && (<p>Selected File: {selectedFilePath}</p>)}
                {feedbackMesage && (<p>{feedbackMesage}</p>)}
            </div>
        </div>
    );

};

export default App; 
