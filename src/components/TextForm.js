import React, {useState} from 'react'

export default function TextForm(props) {

    
    const handleUpCase = ()=> { 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted text to Upper Case", "success");
    };

    const handleLoCase = ()=> { 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted text to Lower Case", "success");
    };

    const handleClrTxt = ()=> { 
        setText("");
        props.showAlert("Text cleared", "success");
    };


    const handleOnChange = (event)=> {
        setText(event.target.value); 
    };

    const handleCopyTxt = ()=> {
         let text = document.getElementById("mybox");
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert("Copied to clipboard", "success");
    };

    const handleXtraSpace = ()=> { 
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces in the text have been removed", "success");
    };

    const [text, setText] = useState('');
 
    return (
    <>
    <div clasName="container" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" style = {{backgroundColor:props.mode==='dark'?'grey':'white', 
            color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCase}>UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoCase}>LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClrTxt}>ClearText</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyTxt}>CopyText</button>
        <button className="btn btn-primary mx-1" onClick={handleXtraSpace}>ClearExtraSpace</button>
    </div>

    <div className="container my-3" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h4> Preview</h4>
        <p>{text.length>0?text:"Enter some text above to preview"}</p>
        <h4>Word Count:</h4>
        <p><b>{text.split(" ").length} words and {text.trim().length} characters</b> <br/>
           Average Read Time {0.008*(text.split(" ").length-1)} minutes
        </p>
    </div>
    </>
  )
}
