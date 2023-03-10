import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import {Row} from "react-bootstrap";
import photoService1 from "../../Images/services/services1.jpg"
import photoService2 from "../../Images/services/services2.jpg"
import photoService3 from "../../Images/services/services3.jpg"
import "../Services/Card.css"
import Container from "react-bootstrap/Container";
import Title from "../Title/Title";


export default function CardServices() {
    return (
        <section id="services">
        <Container className="services">
        <Row className=" px-4 my-5">
            <Title className="title-services" title={"Servicii"}></Title>
            <Col>
            <Card className="card-img flex-column bg-transparent">
                <Card.Img variant="top" src={photoService1} className="img-services"/>
                <Card.Body>
                    <Card.Text>
                        Micropigmentare sprancene si extensii gene fir cu fir model 1D, 2D.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    <Col>
    <Card className="card-img flex-column bg-transparent">
        <Card.Img variant="top" src={photoService2}  className="img-services" />
        <Card.Body>
            <Card.Text>
                Micropigmentare sprancene si extensii gene fir cu fir 1D,2D.
            </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="card-img flex-column bg-transparent">
        <Card.Img variant="top" src={photoService3} className="img-services" />
        <Card.Body>
            <Card.Text>
                Extensii gene fir cu fir model 2D si 3D .
            </Card.Text>
        </Card.Body>
    </Card>
    </Col>

        </Row>
        </Container>
        </section>
        );
    }

