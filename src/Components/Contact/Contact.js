import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../Contact/contact.css"
import Icons from "./Icons";
import "../Contact/icons.css"

function ContactInfo()  {
    return (
        <section id="contact">
        <Container className="contact-info container ">
            <Row>
                <Col>
                    <Card className="card-info bg-transparent">
                        <Card.Header as="h5">Date de contact</Card.Header>
                        <Card.Body>
                            <Card.Title>Moisei, Judetul Maramures</Card.Title>
                            <Card.Text>
                                <strong>Adresa:</strong> Str. Principala, Moisei, Judetul Maramures
                                <br />
                               <strong>Email: </strong><a href="mailto:sony_espada@yahoo.es">sony_espada@yahoo.es</a>
                            </Card.Text>
                        </Card.Body>
                        <Icons/>
                    </Card>
                </Col>
            </Row>
        </Container>
        </section>
    );
}

export default ContactInfo;
