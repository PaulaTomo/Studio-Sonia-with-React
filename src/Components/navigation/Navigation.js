import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../Images/Logob.png";
import "./navigation.css"
import Container from "react-bootstrap/Container";

function Navigation() {
    return (
        <Navbar expand="lg" >
        <Container className="container-fluid">
                <Navbar.Brand href="#home">
                    <img src={Logo}
                         width="100"
                         height="100"
                         className="logo"
                         alt={"logo"}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-link  ms-auto">
                    <Nav.Link href="#home"><i className="fa fa-fw fa-home"></i>Home</Nav.Link>
                    <Nav.Link href="#about"><i className="fa fa-fw fa-globe"></i>About</Nav.Link>
                    <Nav.Link href="#services"><i className="fa fa-fw fa-eye"></i> Services</Nav.Link>
                    <Nav.Link href="#contact"><i className="fa fa-fw fa-envelope"></i>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Container>
            </Navbar>

    );
}

export default Navigation;
