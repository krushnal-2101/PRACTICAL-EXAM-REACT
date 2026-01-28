import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg"  style={{backgroundColor:"  rgb(117, 167, 150)" , fontSize:"17px" , fontWeight:"bold" }}>
      <Container>
        <Navbar.Brand href="#home">HOTEL G1</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          
            <Nav.Link to="/reserve"  as={NavLink}>Reserve</Nav.Link>
            <Nav.Link to="/reservations" as={NavLink}>Reservation</Nav.Link>
            <Nav.Link to="/Login"  as={NavLink}>Login</Nav.Link> 
            <Nav.Link to="/" as={NavLink}>Rooms</Nav.Link>
          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  );
}

export default BasicExample;