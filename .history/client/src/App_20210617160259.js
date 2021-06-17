import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages'
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header'
import {Routing} from "components/routing"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing/>
    </BrowserRouter>
  );
}

export default App;
