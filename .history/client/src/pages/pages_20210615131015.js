import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/grid";

// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";






function Pages() {

    const [repos, setRepos] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadRepos()
    }, [])

    function loadRepos() {
        API.getRepos()
          .then(res => 
            setRepos(res.data), console.log(setRepos)
          )
          .catch(err => console.log(err));
          

      };

      return (
        <Container>Test</Container>
    



      )
    
}



export default Pages;