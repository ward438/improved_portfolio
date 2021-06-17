import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Bio() {
    return (
        <Card className="text-center" style={{ borderRadius: '15px' }}>
            <Card.Header>Robert's Portfolio</Card.Header>
            <Card.Body>
                <Card.Img variant="top" style={{ width: '30%', borderRadius: '15px' }} src={`https://react-portfolio-rob.s3.amazonaws.com/131530476_127869602470312_4401820499573357152_n.jpg`} />
                <Card.Title></Card.Title>
                <Card.Text>
                    Started my development career January of 2021 by enrolling in the UTSA Full Stack Developer Bootcamp. Heavily focused in JavaScript frameworks such as React and Node. Working knowledge of MySql and NoSql databases.

                    Associate of Applied Science in Welding Technologies (Tyler Junior College)
                    OIF 08-09 Veteran
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )
}

export default Bio;