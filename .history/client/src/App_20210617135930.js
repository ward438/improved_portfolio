import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/header'


function App() {
  return (
    <BrowserRouter> 
      <Nav/>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
