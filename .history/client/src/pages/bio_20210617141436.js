import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Bio() {
    return (
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Img variant="top" style={{ width: '50%' }} src={`https://react-portfolio-rob.s3.amazonaws.com/131530476_127869602470312_4401820499573357152_n.jpg`} />
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )
}

export default Bio;