import React,{useState} from 'react'



export default function TextForms(props) {
  const handleUpClick =()=>{
   // console.log("Uppercase was clicked"+text);
    //setText("U have clicked handle up change");

    let newText=text.toUpperCase();
    setText(newText);

  }
  const handleLowerClick =()=>{
    // console.log("Uppercase was clicked"+text);
     //setText("U have clicked handle up change");
 
     let newText=text.toLowerCase();
     setText(newText);
 
   }
  const handleOnChange =(event)=>{
   // console.log("OnChange");
    setText(event.target.value)

  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowerClick} >Convert to lowercase</button>
    </div>
    <div className='container my-3'>
      <p><h2>Your Text Summery</h2></p>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <p>Preview</p>
      <>{text}</>

    </div>
    </>
  )
}
