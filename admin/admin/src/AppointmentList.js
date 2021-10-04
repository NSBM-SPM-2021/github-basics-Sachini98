import * as React from "react";
import { List, Datagrid, TextField,EditButton,DeleteButton,UrlField} from 'react-admin';


export const AppointmentList = props => (
    <List {...props}>

        <Datagrid rowClick="edit">
            <TextField source='userName' />
            <TextField source='medium' />
            <TextField source='email' />
            <TextField source='phone' />
            <TextField source='grade' />
            <TextField source='school' />
            <TextField source='year' />
            <EditButton />
            <DeleteButton/>
        </Datagrid>
    </List>
);
export default AppointmentList
