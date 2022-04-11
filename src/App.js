import React,{useState} from 'react';
import Navbar from './components/ Navbar';
//import About from './components/About';
import Alert from './components/Alert.js';



import TextForms from './components/TextForms'
export function App() {
  const [mode,setMode]=useState('light');

const togglemode=()=>{
       if(mode === 'light') {
          setMode('dark');
         document.body.style.backgroundColor='#042743';
         showAlert("Dark Mode has been enabled","success");
         //document.title="TextUtlis-Dark Mode";//to change the title of textutils while enabling the dark mode
        }

      else{ 
         setMode('light')
           document.body.style.backgroundColor='white';
           showAlert("Light Mode has been enabled","success");
           //document.title="TextUtlis-Light Mode";//to change the title of textutils while enabling the light mode, currently I am not going to use this feature.
        
      }
    }
   const [alert,setAlert]=useState(null);
   const showAlert=(message,type)=>{
      setAlert({
              msg:message,
              type:type
      });
      
        setTimeout(()=>{
          setAlert(null);
        },2000);
  }
      

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="textUtils" mode={mode} togglemode={togglemode} about="about textUtils" />
      <Alert alert={alert}/>
      <div className='container my-3'>
        <TextForms showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>
        {/* <About/> */}
      </div>
          
    </>
  );
}

export default App;
