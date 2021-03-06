import React,{useState} from 'react';
import Navbar from './components/ Navbar';
import About from './components/About';
import Alert from './components/Alert';
import TextForms from './components/TextForms';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export function App() {
  const [mode,setMode]=useState('light');

const togglemode=()=>{
 // document.body.classList.add('bg-'+cls)
       if(mode === 'light') {
          setMode('dark');
         document.body.style.backgroundColor='#042743';
         showAlert("Dark Mode has been enabled","success");
         //document.title="TextUtlis-Dark Mode";//to change the title of textutils while enabling the dark mode
        }

      else{ 
         setMode('light')
         document.body.style.backgroundColor='white';

        // document.style.visibility="visible";
           showAlert("Light Mode has been enabled","success");
           //document.title="TextUtlis-Light Mode";//to change the title of textutils while enabling the light mode, currently I am not going to use this feature.
        
      }
    }
   const [alert,setAlert]=useState(null);
   const showAlert=(message,type)=>{
      setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
      

  return (
    <>
      {/* <Navbar /> */}
      
      {/* <TextForms showAlert={showAlert} heading="Enter text to Analyze below" mode={mode} /> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} about="About" />
      <Alert alert={alert}/>
   <div className="container">
           <Routes>
           <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Enter text to Analyze below" mode={mode} /> }>
            </Route>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            
          </Routes>
        </div>
        </Router>
          
    </>
  );
}

export default App;
