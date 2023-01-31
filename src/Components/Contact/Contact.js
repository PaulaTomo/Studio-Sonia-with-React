import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../Contact/contact.css"
import Icons from "./Icons";
import "../Contact/icons.css"

function ContactInfo()  {
    return (
        <Container className="contact-info container ">
            <Row>
                <Col>
                    <Card className="card-info bg-transparent">
                        <Card.Header as="h5">Date de contact</Card.Header>
                        <Card.Body>
                            <Card.Title>Moisei, Judetul Maramures</Card.Title>
                            <Card.Text>
                                <strong>Adresa:</strong> Str. Principala, Nr. 123, Moisei, Judetul Maramures
                                <br />
                                <strong>Telefon:</strong> +40 000 000 000
                                <br />
                                <strong>Email:</strong> moisei@example.com
                            </Card.Text>
                        </Card.Body>
                        <Icons/>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactInfo;
