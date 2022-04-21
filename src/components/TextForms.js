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
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
       
        <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Convert to uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerClick} >Convert to lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopyClick} >Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaceClick} >Remove Extra spaces</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick} >Clear</button>

        

        

        {/* <button className='btn btn-primary mx-1' onClick={handleSortClick} >Sort Text</button> */}
 
       

    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} >
      <h2>Your Text Summery</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <>{text.length>0 ? text:"Nothing to Preview"}</>

    </div>
    </>
  )
}
