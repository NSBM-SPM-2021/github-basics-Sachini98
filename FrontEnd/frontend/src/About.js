import './css/style.css'
import ServiceList from "./ServiceList";
import {Card, CardImg, CardBlock, CardBody, CardImgOverlay, Col, Row} from "reactstrap";
import background from "./assets/images/vidcover.jpg";
import video from "./assets/images/movie.mp4"
import ReactPlayer from 'react-player/vimeo'
import img6 from './ABC.jpg';
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

                        <CardImg top width="100%" src={img6} alt="" />

                    </Col>
                    <Col>
                        <div className="heading-section mb-4 mt-md-5">
                            <span className="subheading">About Us</span>
                            <h2 className="mb-4">Welcome To Our Chemistry Class </h2>
                        </div>
                        <p>Mr. Chandika dewruwan  is a famous Chemistry tuition teacher in Sri Lanka. He conducts Theory , Revision and paper  tuition classes in Colombo . During past years he has produced the greatest numbers of Island Ranks in the Country.</p>
                    </Col>
                </Row>
            </div>
        </div>

    );
}

export default About;
