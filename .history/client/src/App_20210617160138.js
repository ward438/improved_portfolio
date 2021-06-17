import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages'
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header'


function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
