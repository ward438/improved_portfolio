import { Row, Container } from "../components/grid";
import GetRepos from '../utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from './bio'


function Pages() {
  return (
    <Container>   
      <Bio/>   
      <Row>        
        <GetRepos/>
      </Row>
    </Container>
  )
}

export default Pages;