import {Container, Alert, Col, Row, Card, CardBody, CardTitle, CardImg, CardSubtitle} from 'reactstrap';
import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "./axios";
import  {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import img6 from "./img5.jpg";

toast.configure()
const Appointment = () => {
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [medium, setMedium] = useState('');
    const [grade, setGrade] = useState('');
    const [school, setSchool] = useState('');
    const [year, setYear] = useState('');
    const history = useHistory();

const success = () =>{
     toast.success('Your Appoinment booked!',{
         position:toast.POSITION.TOP_CENTER,
         autoClose:3000
     })
}
    const erroralert = () =>{
        toast.error('Date Already Booked!',{
            position:toast.POSITION.TOP_LEFT,
            autoClose:3000
        })

    }
    function submit() {

        const appointment = { userName,phone,email,medium,grade,school,year};
        console.log(appointment)
        axios.post('http://localhost:3001/appointments', appointment)
            .then(response =>
                    // console.log(response),
                    success(),
                history.push('/')
            )
            .catch(error => {
                erroralert()
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
    const handleSubmit = () => {
        // e.preventDefault();


        // fetch('/appointments', {
        //     method: 'GET',
        //     headers: { "Content-Type": "application/json" },
        //     // body: JSON.stringify(blog)
        // }).then((response) => {
        //     console.log(response);
        //     history.push('/');
        // })
    }


    return (
        <div className="create">
            <h2>Register To Class</h2>
            <form className="appointment-form">

                <Row className="mt-3">
                    <Col xs="6">
                        <label>Name:</label>
                        <input
                            className="bg-light p-2 border name"
                            type="text"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                    <Col xs="6">
                        <label>Phone:</label>
                        <input
                            className="bg-light p-2 border phone"
                            type="text"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="6">
                        <label>A/L Year:</label>
                        <input
                            className="bg-light p-2 border phone"
                            type="text"
                            required
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                    <Col xs="6">
                        <label>Email:</label>
                        <input
                            className="bg-light p-2 border phone"
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="6">
                        <label>Class:</label>
                        <select
                            className="bg-light p-2 border"
                            value={grade}
                            required
                            onChange={(e) => setGrade(e.target.value)}
                        >
                            <option value="Grade12">Grade12</option>
                            <option value="Grade13">Grade13</option>
                            <option value="Grade12">PaperClass</option>
                            <option value="Grade13">Revision</option>
                        </select>
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                    <Col xs="6">
                        <label>Medium</label>
                        <select
                            className="bg-light p-2 border"
                            value={medium}
                            required
                            onChange={(e) => setMedium(e.target.value)}
                        >
                            <option value="sinhala">සිංහල</option>
                            <option value="english">English</option>

                        </select>
                    </Col>
                </Row>

                {/*<label>Description:</label>*/}
                {/*<textarea*/}
                {/*    className="bg-light p-2 border description"*/}
                {/*    required*/}
                {/*    value={service}*/}
                {/*    onChange={(e) =>setService(e.target.value) }*/}
                {/*/>*/}
                <Row className="mt-3">

                        <label>School:</label>
                        <input
                            className="bg-light p-2 border phone"
                            type="text"
                            required
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                        />

                </Row>



                <button onClick={submit} className="makeappointment">Make an Appointment</button>
            </form>
        </div>
    );
}

export default Appointment;
