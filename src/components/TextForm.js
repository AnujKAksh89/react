import React, {useRef, useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState('');
    const textAreaRef = useRef(null);

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lower case!", "success")
    }
    const handleCapClick = ()=>{
        var low = text.toLowerCase().split(' ');
        for(var i =0; i<low.length; i++){
            low[i] = low[i][0].toUpperCase() + low[i].slice(1);
        }

        setText(low.join(" "));
        props.showAlert("Text converted to capitalized case!", "success")
    }
    const handleSenClick = ()=>{
        var low = text.toLowerCase().split('. ');
        for(var i =0; i<low.length; i++){
            low[i] = low[i][0].toUpperCase() + low[i].slice(1);
        }

        setText(low.join(". "));
        props.showAlert("Text converted to sentence case!", "success")
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to clipboard!", "success")
    }
    const handleDownloadClick = ()=>{
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('texts').value],    
                    {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "myText.txt";
        document.body.appendChild(element);
        element.click();
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
            <div className='mb-3'>
                <div className="mb-3">
                    <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{ props.heading }</h1>
                    <textarea className={`form-control text-${props.mode === 'light' ? 'light' : 'dark'}`} rows="9" id="texts" ref={textAreaRef} value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-danger mx-2' onClick={handleUpClick}>Upper Case</button>
                <button className='btn btn-danger mx-2' onClick={handleLowClick}>Lower Case</button>
                <button className='btn btn-danger mx-2' onClick={handleCapClick}>Capitalize</button>
                <button className='btn btn-danger mx-2' onClick={handleSenClick}>Sentence Case</button>
                <button className='btn btn-danger mx-2' onClick={handleCopyClick}>Copy Text</button>
                <button className='btn btn-danger mx-2' onClick={handleDownloadClick}>Download</button>
                <button className='btn btn-danger mx-2' onClick={() => {setText("")}}>Clear Text</button>
            </div>
            <div className='container'>
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summary:</h2>
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(" ").length} Words and {text.length} characters</h1>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(" ").length} minutes reading</p>
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Output:</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text}</p>
            </div>
        </>
    )
}
