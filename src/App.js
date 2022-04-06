import React,{useState} from 'react';
import Navbar from './components/ Navbar';
//import About from './components/About';


import TextForms from './components/TextForms'
export function App() {
  const [mode,setMode]=useState('light');

const togglemode=()=>{
       if(mode === 'light') {
          setMode('dark');
         document.body.style.backgroundColor='#042743';}

      else{ 
         setMode('light')
           document.body.style.backgroundColor='white';
      }
    }
      

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="textUtils" mode={mode} togglemode={togglemode} about="about textUtils" />
      <div className='container my-3'>
        <TextForms mode={mode} heading="Enter the text to analyze below"/>
        {/* <About/> */}
      </div>
          
    </>
  );
}

export default App;
