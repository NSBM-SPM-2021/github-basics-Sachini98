import { Link } from "react-router-dom";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';
import img6 from './img5.jpg';
import {useEffect, useState} from "react";
import axios from "./axios";

function Workers () {
    const [title, setTitle] = useState('Nishani Kulathunga');
    const [subTitle, setSubTitle] = useState('Nail Master');

    const [employees,setEmployees] = useState([]);
    useEffect(() =>{
        //get data function
        async function fetchPosts() {
            const response = await  axios.get("/employee");
            //save data to the setvideos from response
            console.log(response.data)
            setEmployees(response.data);
            return response;
        }
        fetchPosts().then(r => console.log("done"));
    },[]);

    return (

<div>
    <div>
        <div className="artists-header">
            <span >Consultants</span>
            <h2 >Doctors</h2>
            <p>This is our professional doctors</p>
        </div>
    </div>
    <CardDeck >
        {employees.map(
            ({name, service, jobRole, workingHours, workedHours, sallery}) =>(
                // <Video url={url}
                //        channel={channel}
                //        description={description}
                //        song={song}
                //        likes={likes}
                //        shares={shares}
                //        messages={messages}
                <Card>

                    <div className="card-row">
                        <div >
                            <CardImg top width="100%" src={img6} alt="Card image cap" />
                            <div className="card-body-my">
                                <CardBody >
                                    <CardTitle>{name}</CardTitle>
                                    <CardSubtitle> {service}</CardSubtitle>
                                </CardBody>


                            </div>
                        </div>
                    </div>

                </Card>


            )
        )}


        {/*<Card>*/}
        {/*    <CardImg top width="100%" src={img6} alt="Card image cap" />*/}
        {/*    <div className="card-body-my">*/}
        {/*        <CardBody >*/}
        {/*            <CardTitle>{title}</CardTitle>*/}
        {/*            <CardSubtitle> {subTitle}</CardSubtitle>*/}
        {/*        </CardBody>*/}
        {/*    </div>*/}

        {/*</Card>*/}
        {/*<Card>*/}
        {/*    <CardImg top width="100%" src={img6} alt="Card image cap" />*/}
        {/*    <div className="card-body-my">*/}
        {/*        <CardBody >*/}
        {/*            <CardTitle>{title}</CardTitle>*/}
        {/*            <CardSubtitle> {subTitle}</CardSubtitle>*/}
        {/*        </CardBody>*/}
        {/*    </div>*/}

        {/*</Card>*/}
        {/*<Card>*/}
        {/*    <CardImg top width="100%" src={img6} alt="Card image cap" />*/}
        {/*    <div className="card-body-my">*/}
        {/*        <CardBody >*/}
        {/*            <CardTitle>{title}</CardTitle>*/}
        {/*            <CardSubtitle> {subTitle}</CardSubtitle>*/}
        {/*        </CardBody>*/}
        {/*    </div>*/}

        {/*</Card>*/}
    </CardDeck>
</div>


    );
}

export default Workers;
