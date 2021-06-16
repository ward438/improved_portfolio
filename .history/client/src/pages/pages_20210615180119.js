import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/Jumbotron";
import {Button} from 'react-bootstrap';



// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";






function Pages() {

    const [repos, setRepos] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadRepos()
    }, [])

    const loadRepos = async () => {
        await API.getRepos()
          .then(res => 
            setRepos(res.data),
            console.log(API.getRepos())           
          )
          .then((response) => {
            console.log(response)
          })
          .catch(err => console.log(err));
      };

      

      return (
        <Container>Test
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>
                  {}
                </h1>
                <Button onClick={}>API</Button>
              </Jumbotron>
            </Col>
          </Row>

        </Container>
    



      )
    
}



export default Pages;