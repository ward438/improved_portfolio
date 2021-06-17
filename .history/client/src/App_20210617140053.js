import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/header'


function App() {
  return (
    <BrowserRouter> 
      <Header/>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
