import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Switch>
        {/* <Route path="/" component={Books}/>        */}
        test      
      </Switch>
      {/* add button here */}
      App.js 
      
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
