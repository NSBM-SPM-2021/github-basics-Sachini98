import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput, NumberInput, TextField} from 'react-admin'

const AppointmentEdit = (props) => {
    return (
        <Edit title='Edit Appointment'{...props}>
            <SimpleForm>
                <TextInput source='userName' />
                <TextInput source='medium' />
                <TextInput source='email' />
                <TextInput source='phone' />
                <TextInput source='grade' />
                <TextInput source='school' />
                <TextInput source='year' />
                <TextInput disabled  source='id' />
            </SimpleForm>

        </Edit>

    )
}

export default AppointmentEdit
