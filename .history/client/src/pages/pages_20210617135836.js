import { Col, Row, Container } from "../components/grid";
import GetRepos from '../utils/API'
import Nav from '../components/header'
function Pages() {

  return (
    <Container>      
      <Row>        
        <GetRepos/>
      </Row>
    </Container>
  )
}

export default Pages;