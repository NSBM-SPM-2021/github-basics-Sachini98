import React from 'react'
import {Create, SimpleForm, TextInput,DateInput} from 'react-admin'

const AppointmentCreate = (props) => {
    return (
        <Create title='Register New Student'{...props}>
            <SimpleForm>
            <TextInput source='userName' />
                <TextInput source='medium' />
                <TextInput source='email' />
                <TextInput source='phone' />
                <TextInput source='grade' />
                <TextInput source='school' />
                <TextInput source='year' />
            </SimpleForm>
        </Create>

    )
}

export default AppointmentCreate