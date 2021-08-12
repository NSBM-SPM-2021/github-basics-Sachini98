import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import BackGround from "./BackGround";
import Appointment from "./Appointement";
import ServiceList from "./ServiceList";
import About from "./About";
import Cards from "./Card";
import Footer from "./Footer";
import AdminEmployees from "./AdminEmployees";
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import jsonServerProvider from 'ra-data-json-server';
import EmployeeList from "./EmployeeList";

const dataProvider = jsonServerProvider('http://localhost:3000')
function Adminset() {
    return (
         // <EmployeeList/>
        <div>
            <Admin dataProvider={dataProvider}>
                <Resource
                    name='employee'
                    list={EmployeeList}
                    // create={MainCreate}
                    // edit={MainEdit}
                />


            </Admin>
        </div>

    );
}

export default Adminset;
