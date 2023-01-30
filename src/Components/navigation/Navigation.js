
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../Images/logo.png";
import "./navigation.css"

function Navigation() {
    return (
        <>
            <Navbar expand="sm" bg="transparent" variant="light">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <img src={Logo} className="logo" alt={"logo"}/>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Services</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Navigation;
