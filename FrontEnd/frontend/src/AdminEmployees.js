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
    Input,
    Table
} from 'reactstrap';
import img6 from './img5.jpg';
import {useEffect, useState} from "react";
import axios from "./axios";


function AdminEmployees () {
    const [title, setTitle] = useState('Nishani Kulathunga');
    const [subTitle, setSubTitle] = useState('Nail Master');

    const [employees,setEmployees] = useState([]);
    useEffect(() =>{
        //get data function
        async function fetchPosts() {
            const response = await  axios.get("/employee");
            //save data to the setvideos from response
            console.log(response)
            setEmployees(response);
            return response;
        }
        fetchPosts().then(r => console.log("done"));
    },[]);

    return (

        <div>
            <div>
                <div className="artists-header">
                    <span >Artistic Director</span>
                    <h2 >Makeup Artist</h2>
                    <p>This is our professional workers</p>
                </div>
            </div>

            <Card>
                <CardBody>
                    <div className="d-flex align-items-center">
                        <div>
                            <CardTitle>Projects of the Month</CardTitle>
                            <CardSubtitle>Overview of Latest Month</CardSubtitle>
                        </div>
                        <div className={"ml-auto d-flex no-block align-items-center"}>
                            <div className="dl">
                                <Input type="select" className="custom-select">
                                    <option value="0">Monthly</option>
                                    <option value="1">Daily</option>
                                    <option value="2">Weekly</option>
                                    <option value="3">Yearly</option>
                                </Input>
                            </div>
                        </div>
                    </div>
                    <Table className="no-wrap v-middle" responsive>
                        <thead>
                        <tr className="border-0">
                            <th className="border-0">Name</th>
                            <th className="border-0">Service</th>

                            <th className="border-0">Status</th>
                            <th className="border-0">Weeks</th>
                            <th className="border-0">Budget</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map(
                            ({name, service, jobRole, workingHours, workedHours, sallery}) =>(
                                <tr>
                                    <td>
                                        <div className="d-flex no-block align-items-center">
                                            {/*<div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>*/}
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">{name}</h5><span>{jobRole}</span></div>
                                        </div>
                                    </td>
                                    <td>{service}</td>

                                    <td>
                                        <i className="fa fa-circle text-orange" id="tlp1"/>

                                    </td>
                                    <td>{workedHours}</td>
                                    <td className="blue-grey-text  text-darken-4 font-medium">{sallery}</td>
                                </tr>

                            )
                        )}


                        </tbody>
                    </Table>
                </CardBody>
            </Card >
        </div>


    );
}

export default AdminEmployees;
