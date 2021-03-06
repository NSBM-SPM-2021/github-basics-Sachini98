import * as React from "react";
import { Admin, Resource } from 'react-admin';
 import simpleRestClient from 'ra-data-simple-rest';
import Dashboard from "./Dashboard";
import AppointmentList from "./AppointmentList";
import AppointmentCreate from "./AppointmentCreate";
import AppointmentEdit from "./AppointmentEdit";


const dataProvider = simpleRestClient('https://chemistryclass-backend.herokuapp.com');
const AdminList = () => (

       <Admin dataProvider={dataProvider} dashboard={Dashboard}>
           <Resource name="register" list={AppointmentList} create={AppointmentCreate} edit={AppointmentEdit}/>
           </Admin>
    );
export default AdminList;
