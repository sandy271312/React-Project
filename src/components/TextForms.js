import React,{useState} from 'react'



export default function TextForms(props) {
  const handleUpClick =()=>{
   // console.log("Uppercase was clicked"+text);
    //setText("U have clicked handle up change");

    let newText=text.toUpperCase();
    setText(newText);

  }
  const handleOnChange =(event)=>{
   // console.log("OnChange");
    setText(event.target.value)

  }
  const [text, setText] = useState('');
  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick} >Convert to uppercase</button>
    </div>
  )
}
