import React,{useState} from 'react'



export default function TextForms(props) {
  const handleUpClick =()=>{
   // console.log("Uppercase was clicked"+text);
    //setText("U have clicked handle up change");

    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted  in uppercase","Success");

  }
  const handleLowerClick =()=>{
    // console.log("Uppercase was clicked"+text);
     //setText("U have clicked handle up change");
 
     let newText=text.toLowerCase();
     setText(newText);
     props.showAlert("Converted  in lowercase","Success");
 
   }
  
  const handleCopyClick =()=>{
   
     var copyText=document.getElementById('myBox');
     copyText.select();
     
     navigator.clipboard.writeText(copyText.value);
     props.showAlert("Copied to clipboard","Success");

   }
   const handleExtraSpaceClick =()=>{
                         let newText=text.split(/[ ]+/);
                         setText(newText.join(" "));
                         props.showAlert("Extra Spaces removed","Success");

  }
    const handleClearClick =()=>{
    
     let newText='';
     setText(newText);
     props.showAlert("Text cleard","Success");

 
   }
  const handleOnChange =(event)=>{
   // console.log("OnChange");
    setText(event.target.value)

  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#42743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowerClick} >Convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleCopyClick} >Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaceClick} >Remove Extra spaces</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick} >Clear</button>

        

        

        {/* <button className='btn btn-primary mx-1' onClick={handleSortClick} >Sort Text</button> */}
 
       

    </div>
    <div className='container my-3'style={{color:props.mode==='dark'?'white':'#42743'}}>
      <h2>Your Text Summery</h2>
      <p>{text.length>0?text.split(" ").length:0} words and {text.length} character</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <>{text.length>0 ? text:"Enter something into the text box above to perview it here"}</>

    </div>
    </>
  )
}
