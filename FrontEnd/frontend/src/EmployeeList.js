import React from 'react'
import {List, Datagrid, TextField,EmailField, DateField, EditButton, DeleteButton } from 'react-admin'

const EmployeeList = (props) => {
    return <List {...props}>
        <Datagrid>
            {console.log("ok")}
            <TextField source="name"/>
            <TextField source="service"/>
            <TextField source="workedHours"/>
            <EditButton basePath="/employees"/>
            <DeleteButton basePath="/employees"/>
        </Datagrid>

    </List>
}
export default EmployeeList
