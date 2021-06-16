import React, { useEffect } from "react";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/Jumbotron";
// import {Button} from 'react-bootstrap';
import GetRepos from '../utils/API'




// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";






function Pages() {      

      return (
        <Container>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>
                  {'pages.js'}
                </h1>
                <h2>
                  {console.log('pages.js h2 test')}
                </h2>
                <h3>                  
                  {GetRepos()}
                  {console.log(GetRepos().data)}
                </h3>
              </Jumbotron>
            </Col>
          </Row>

        </Container>
    



      )
    
}



export default Pages;