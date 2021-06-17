import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Button, Navbar, NavDropdown, FormControl, Form, Nav } from 'react-bootstrap';


function App() {
  return (
    <BrowserRouter> 
      <Nav/>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
