import { Row, Container } from "../components/grid";
import GetRepos from '../utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from './bio'


export function Pages() {
  return (
    <Container>
      <div style={{ padding: 16 }}>
        <TopLoader backgroundColor="#eee6ff" show fixed={false} color="#0000e4" />
      </div>
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
    </Container>
  )
}