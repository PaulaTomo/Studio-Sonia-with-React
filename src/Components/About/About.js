import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap';
import imgStudio from "../../Images/imageStudio.jpg"
import "../About/about.css"
import Title from "../Title/Title";


export default function About() {
    return (
        <section id="about">
        <Container className="about-us">
            <Title className="title-services" title={"Bine ati venit la Studio Sonia"}></Title>
                <Col sm={7}>
                    <div className="description">
                                  <p className="mt-4">
                                         Destinația dvs. pentru sprâncene și gene uimitoare cu aspect natural.
                                      Cele mai noi tehnici în microblading și laminare gene pentru a vă îmbunătăți
                                      frumusețea și a vă întări încrederea.
                                       Cu microblading-ul, puteți spune la revedere sprâncenelor neregulate
                                      sau subțiri și bună ziua sprâncenelor perfect formate și umplute,
                                      care durează până la 2 ani.</p>
                        <img className="img-about img-fluid " src={imgStudio}
                             width="330"
                             height="350"
                             alt="img"
                        />
                                     <p>
                                       Pentru complementul perfect al sprâncenelor tale microbladate,
                                      încercați si tratamentul de laminare gene. Această procedură sigură
                                      și blândă folosește o soluție de perm pentru a ridica și curbura
                                      genele tale naturale, oferindu-vă aspectul de gene mai lungi și
                                      mai pline fără a fi nevoie de rimel sau extensii.
                                      La Studio Sonia, confortul și satisfacția dvs. sunt prioritățile  principale.
                                      Folosim numai produse de cea mai înaltă calitate și tehnici de sterilizare
                                      pentru a vă asigura o experiență sigură și plăcută.
                                  </p>
                    </div>

                </Col>
        </Container>
        </section>
    )
}
