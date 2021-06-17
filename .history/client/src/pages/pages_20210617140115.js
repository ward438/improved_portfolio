import { Col, Row, Container } from "../components/grid";
import GetRepos from '../utils/API'


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