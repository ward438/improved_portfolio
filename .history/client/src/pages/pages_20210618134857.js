import { Row, Container } from "../components/grid";
import GetRepos from '../utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from './bio'
import '../index.css'

export function Pages() {
  return (
    <Container>
      <Bio />
    </Container>
  )
}

export function Portfolio() {
  return (
    <Container>
      <Row>
        <GetRepos />
      </Row>
      <div className="footer">
        Contact Me: <br />
        <a href="mailto: wardrs438@gmail.com" style={{ fontSize: '20px', textAlign: '30px' }}>Email</a><br />
        <a href="https://github.com/ward438/" style={{ fontSize: '20px', textAlign: '30px' }}>GitHub</a>
      </div>
    </Container>
  )
}