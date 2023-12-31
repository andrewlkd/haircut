import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const TextForm = () => {
  const [text, setText] = useState('');
  const [patientId, setPatientId] = useState(-1);

  const handlePatientIdChange = (event) => {
    setPatientId(Number(event.target.value));
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    // Send the text to the Flask backend
    axios.post('http://127.0.0.1:5000/api/patient/text_payload', { text:text, patient_id:patientId })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error submitting text:', error);
      });
  };

  return (
	<div className="text-container">
	{/* <label>
	  Patient ID:
	  <input type="number" value={patientId} onChange={handlePatientIdChange} />
	</label> */}
	<br />
	<label>
	  Enter Text:
	  <input type="text" value={text} onChange={handleChange} />
	</label>
	<br />
	<Button className = "text-button" variant='secondary' onClick={handleSubmit}>Submit Text</Button>
  </div>
  );
};

export default TextForm;