import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../index.css'

function Header() {
  return (
    <Navbar bg="secondary" expand="lg" className='{navbar}'>
      <Navbar.Brand style={{ color: 'white'}}>RW Portfolio</Navbar.Brand>&nbsp;&nbsp;&nbsp;
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" style={{ color: 'white', fontSize: '35px', }}>Home </Nav.Link>&nbsp;&nbsp;
          <Nav.Link href="/portfolio" style={{ color: 'white',fontSize: '35px',textShadow: "2px 2px black"}}>Portfolio</Nav.Link>          
        </Nav>       
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;