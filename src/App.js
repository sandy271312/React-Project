import React from 'react';
import Navbar from './components/ Navbar';
import TextForms from './components/TextForms'
export function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="textUtils" about="about textUtils" />
      <div className='container my-3'>
        <TextForms heading="Enter the text to analyze below"/>
      </div>
          
    </>
  );
}

export default App;
