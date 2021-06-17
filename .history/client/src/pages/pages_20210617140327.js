import { Row, Container } from "../components/grid";
import GetRepos from '../utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';


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