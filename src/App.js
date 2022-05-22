import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';






function App() {

  const [mode,setMode]=useState('light'); //wheather dark mode is enabled or not

   const toggleMode = ()=>{
     if(mode==='light')
     {
       setMode('dark');
       document.body.style.backgroundColor="black";

     }
     else
     {
      setMode('light');
      document.body.style.backgroundColor="#eee"; 

    }
   }
  return (
  
    <div className="App">
      <header className="App-header">
            <Navbar mode={mode} toggleMode={toggleMode}/>
            <Main mode={mode}/>
            <Footer mode={mode}/>
     
      </header>
    </div>
  );
}

export default App;