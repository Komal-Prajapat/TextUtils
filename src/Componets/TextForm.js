import React, { useState } from 'react';

export default function TextForm() {
  const [text, setText] = useState('');

  const upcase = () => {
    setText(text.toUpperCase());
  };

  const locase = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const clear = () => {
    setText(" ");
  };
  return (
    <>
      <h1>Text Transformation</h1>
      <div className="container mt-5">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Type..."
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>



        <button className="btn btn-primary mx-2" onClick={upcase}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={locase}>
          Convert To Lowecase
        </button>
        <button className="btn btn-primary mx-2" onClick={clear}>
          Clear
        </button>

      </div>

      <div className="container my-3">
  <h1>Your text summary</h1>
  <p>{text.split("l").length-1} Words and {text.length} Characters</p>
  <p>{0.008 * text.split("").length} Minutes read</p>

</div>
</> 
 );
}
