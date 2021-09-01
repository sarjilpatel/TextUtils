import React, { useState } from "react";
import './textForm.css';


export default function Textform(props) {

    const toUpperCase = (event) =>{
        event. preventDefault();
        let upperCase = text.toUpperCase();
        settext(upperCase);
        props.showAlert("Converted to uppercase","success");
    }
    const toLowerCase = (event) =>{
        event. preventDefault();
        let lowerCase = text.toLowerCase();
        settext(lowerCase);
        props.showAlert("Converted to lowercase","success");
    }

    const handleOnchange = (event) =>{
        settext(event.target.value);
    }
    const [text,settext] = useState("");

    const copy = (event) =>{
        event.preventDefault();
        var newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard","success");
    }

    const clearText = (event) =>{
      event.preventDefault();
      settext("");
      props.showAlert("Text cleared","success");
    }

    const removeExtra =(event)=>{
      event.preventDefault();
      let newText = text.split(/[ ]+/);
      settext(newText.join(" "));
      props.showAlert("Extra spaces cleared","success");
    }

  return (
    <div className="" style={{color:(props.mode === 'light'?"black":"white")}}>
      <div className="container">
        <form action="">
          <div className="mb-3">
            <h2>Enter text</h2>
            <textarea value={text} className="form-control" id="myBox" rows="8" onChange={handleOnchange} style={{backgroundColor:(props.mode === 'light'?"white":"grey"),color:(props.mode === 'light'?"black":"white")}}></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={toUpperCase}>To UpperCase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={toLowerCase}>To LowerCase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={copy}>Copy to clipboard</button>
          <button className="btn btn-primary mx-2 my-2" onClick={removeExtra}>Remove extra spaces</button>
          <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear text</button>
        </form>
      </div>
      <div className="container my-3 mx-2">
        <h2>Text summary</h2>
        <p>{text.split(" ").length -1} words and {text.length} characters.</p>
        <p>{0.008*(text.split(" ").length-1)} minutes read</p>
        <h2>Preview</h2>
        <p>text</p>
      </div>
    </div>
    

  );
}
