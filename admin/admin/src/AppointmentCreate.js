import React from 'react'
import {Create, SimpleForm, TextInput,DateInput} from 'react-admin'

const AppointmentCreate = (props) => {
    return (
        <Create title='Create a Post'{...props}>
            <SimpleForm>
                <TextInput source='userName' />
                <DateInput source='date' />
                <TextInput source='time' />
                <TextInput source='service' />
                <TextInput source='consumer' />
                <DateInput source='birthDate' />
                <TextInput source='phone' />
            </SimpleForm>
        </Create>

    )
}

export default AppointmentCreate
