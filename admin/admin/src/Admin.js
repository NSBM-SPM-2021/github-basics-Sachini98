import * as React from "react";
import { Admin, Resource } from 'react-admin';
 import simpleRestClient from 'ra-data-simple-rest';
import Dashboard from "./Dashboard";
import AppointmentList from "./AppointmentList";
import AppointmentCreate from "./AppointmentCreate";
import AppointmentEdit from "./AppointmentEdit";


const dataProvider = simpleRestClient('http://localhost:3001');
const AdminList = () => (

       <Admin dataProvider={dataProvider} dashboard={Dashboard}>
           <Resource name="appointments" list={AppointmentList} create={AppointmentCreate} edit={AppointmentEdit}/>
           </Admin>
    );
export default AdminList;
