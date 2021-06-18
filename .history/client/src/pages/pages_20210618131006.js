import { Row, Container } from "../components/grid";
import GetRepos from '../utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from './bio'

export function Pages() {
  return (
    <Container style={{marginTop: '15px' }} >      
      <Bio/>
    </Container>
  )
}

export function Portfolio() {
  return (
    <Container>      
      <Row>      
        <GetRepos/>
      </Row>
    </Container>
  )
}