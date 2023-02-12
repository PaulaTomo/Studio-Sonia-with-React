import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
const Footer = () => (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3  ">
                    Copyright &copy; {new Date().getFullYear()} Paula Tomoiaga. Toate drepturile sunt rezervate
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
