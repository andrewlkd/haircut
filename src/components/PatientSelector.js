import React, { useState, useEffect } from 'react';
import Select from 'react-select'
const options = [
    { value: 0, label: 'Simon Downs' },
    { value: 1, label: 'Emma James' },
  ]
  
export default function PatientSelector(props) {

    const changeHandler = e => {
        props.setPatientId(e.value);
    };

    return <Select
        name="patient_id"
        value={options.find(item => item.value === props.patientId)}
        onChange={changeHandler}
        options={options}
    />
}
