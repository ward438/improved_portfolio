import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header'
import { Routing } from "./components/routing"


function App() {
  return (
    <BrowserRouter>
      <Header />     
      <Routing /> 
      <div className="footer">
        Contact Me: <br  style={{ fontSize: '20px', textAlign: '30px', textColor: 'white'}}/>
        <a href="mailto: wardrs438@gmail.com" style={{ fontSize: '20px', textAlign: '30px', textColor: 'white'}}>Email</a>&nbsp;&nbsp;
        <a href="https://github.com/ward438/" style={{ fontSize: '20px', textAlign: '30px' }}>GitHub</a>
      </div>     
    </BrowserRouter>
    
  );
}

export default App;
