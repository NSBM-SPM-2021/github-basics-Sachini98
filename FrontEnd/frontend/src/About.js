import './css/style.css'
import ServiceList from "./ServiceList";
import {Card, CardBlock, CardBody, CardImgOverlay, Col, Row} from "reactstrap";
import background from "./assets/images/vidcover.jpg";
import video from "./assets/images/movie.mp4"
import ReactPlayer from 'react-player/vimeo'

function playVideo() {
    this.refs.vidRef.play();
}

const About = () => {

    return (
        <div>
            <div>
                <ServiceList/>
            </div>
            <br/>
            <br/>
            <div>
                <Row>
                    <Col>
                        <br/>
                        <br/>

                                <ReactPlayer url='https://vimeo.com/385010495' />

                    </Col>
                    <Col>
                        <div className="heading-section mb-4 mt-md-5">
                            <span className="subheading">About Us</span>
                            <h2 className="mb-4">Welcome To Haircare A Hair Salon</h2>
                        </div>
                        <p>Saloon Haircare is filled with amazingly talented staff who are always working to improve, inspire and fulfill your Makeup,Skin & hair needs. Our expert Makeup Artist & stylists have been working
                            in the Beauty saloon industry for 13+ years, and they not only do makeup,cut, colour and style hair, but they exemplify what it means to be a professional Makeup Artist & hair stylist.
                            They are committed to learning new techniques and trends in the Makeup & hair industry, learning that they pass along to their fellow Makeup Artists & Hair stylists and clients.</p>
                    </Col>
                </Row>
            </div>
        </div>

    );
}

export default About;
