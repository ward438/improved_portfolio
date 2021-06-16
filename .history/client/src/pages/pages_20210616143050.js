import React, { useEffect } from "react";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/Jumbotron";
// import {Card, Button} from 'react-bootstrap';
import GetRepos from '../utils/API'




// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";






function Pages() {

  return (
    <Container>
      <Row>
        <GetRepos />
      </Row>

    </Container>




  )

}



export default Pages;