import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>     
      App.js       
    <Pages/>
    </BrowserRouter>
  );
}

export default App;
