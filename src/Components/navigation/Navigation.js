
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../Images/Logob.png";
import "./navigation.css"
import Container from "react-bootstrap/Container";

function Navigation() {
    return (
        <Container className="navbar">
            <Navbar expand="sm " bg="transparent">
                <Navbar.Brand href="#Home"></Navbar.Brand>
                <img src={Logo}
                     width="100"
                     height="100"
                     className="logo"
                     alt={"logo"}/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-link md-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Services">Services</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Container>
    );
}

export default Navigation;
