import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleloClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{
            color: props.mode==='dark'? 'white':'#042743'
          }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
          style={{
            backgroundColor: props.mode==='dark'? 'grey':'white',
            color: props.mode==='dark'? 'white':'black'
          }}
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleloClick}>
          Convert To LowerCase
        </button>
      </div>
      <div className="container my-5" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
      </div>
    </>
  );
};

export default TextForm;
