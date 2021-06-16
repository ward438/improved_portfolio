import React, { useEffect } from "react";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/Jumbotron";
import {Card, Button} from 'react-bootstrap';
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
                <GetRepos>
                  <h1>{}</h1>
                </GetRepos>
              </Jumbotron>

              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            </Col>
          </Row>

        </Container>
    



      )
    
}



export default Pages;