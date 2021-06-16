import React, { useState, useEffect } from "react";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/Jumbotron";
import {Button} from 'react-bootstrap';



// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";






function Pages() {

    // const [repos, setRepos] = useState([])
    // const [formObject, setFormObject] = useState({})

    // useEffect(() => {
    //     loadRepos()
    // }, [])

    // const loadRepos = async () => {
    //     await API.getRepos()
    //       .then(res => 
    //         setRepos(res.data),
    //         console.log(API.getRepos()),
    //         console.log('')          
    //       )
    //       .then((response) => {
    //         console.log(response)           
            
    //       })
    //       .catch(err => console.log(err));
    //   };

    
      

      return (
        <Container>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>
                  {'pages.js'}
                </h1>
              </Jumbotron>
            </Col>
          </Row>

        </Container>
    



      )
    
}



export default Pages;