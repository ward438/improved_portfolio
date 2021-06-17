import { Row, Container } from "../components/grid";
import GetRepos from '../utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from './bio'
import TopLoader from "react-top-loader";

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
      <div style={{ padding: 16 }}>
        <TopLoader backgroundColor="#eee6ff" show fixed={false} color="#0000e4" />
      </div>
      <Row>
        <GetRepos />
      </Row>
    </Container>
  )
}