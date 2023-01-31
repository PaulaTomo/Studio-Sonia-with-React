import "../Home/home.css"
import imageBanner from "../../Images/Carousel/banner1 .png"
import imageTwo from "../../Images/Carousel/banner2.png"
import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
    return (

        <Carousel>
            <Carousel.Item>
                <div className="container-lg img-carousel ">
                    <img
                        className="d-block w-100 "
                        src={imageBanner}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container-lg img-carousel ">
                    <img
                        className="d-block w-100"
                        src={imageTwo}
                        alt="Second slide"
                    />
                </div>
            </Carousel.Item>
        </Carousel>

    );
}

export default CarouselHome;
