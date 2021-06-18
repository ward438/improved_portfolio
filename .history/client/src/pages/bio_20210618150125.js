import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../index.css'

function Bio() {
    return (
        <Card className="text-center" style={{ borderRadius: '15px', marginBottom: '13rem' }}>
            <Card.Body>
                <Card.Header>Robert's Portfolio</Card.Header>
                <Card.Img variant="top" style={{ width: '15%', borderRadius: '15px' }} src={`https://react-portfolio-rob.s3.amazonaws.com/131530476_127869602470312_4401820499573357152_n.jpg`} />
                <Card.Title></Card.Title>
                <Card.Text>
                    My development career started January 2021 after enrolling in the UTSA Full Stack Developer Bootcamp. Heavily focused in JavaScript frameworks such as React and Node.
                </Card.Text>
            </Card.Body>

            <Card.Footer className="text-muted" className="techNames">
                <ul>
                    Languages: JavaScript <br />
                    Version Control: Git<br />
                    Frameworks: React, Handlebars, JQuery, Node, Express <br />
                    Databases: MySql,MongoDB (Sequelize ORM, Mongoose ODM) <br />
                    Development: Web Development, Scripting, Object Oriented Programming, API Interaction <br />
                    Dev Tools: Heroku, GitHub
                </ul>
                <div>
                    AAS Welding Technology,
                    Tyler Junior College (Tyler,TX) <br />
                    OIF 08-09 Veteran <br />
                </div>
            </Card.Footer>
            <div></div>
        </Card>

    )
};


export default Bio;