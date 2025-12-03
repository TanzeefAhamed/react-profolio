import React, { useState } from 'react';
import { create } from './api/api-contact'; // Import helper

export default function Contact() {
  const [values, setValues] = useState({ firstname: '', lastname: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    create(values).then((data) => {
      if (data && data.error) alert(data.error);
      else {
        alert("Message Sent!");
        setValues({ firstname: '', lastname: '', email: '', message: '' });
      }
    });
  };
  const handleChange = name => event => { setValues({ ...values, [name]: event.target.value }); };

  return (
    <div style={{padding:'20px'}}><h2>Contact Me</h2><form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" value={values.firstname} onChange={handleChange('firstname')} required /><br/>
      <input type="text" placeholder="Last Name" value={values.lastname} onChange={handleChange('lastname')} required /><br/>
      <input type="email" placeholder="Email" value={values.email} onChange={handleChange('email')} required /><br/>
      <button type="submit">Send</button>
    </form></div>
  );
}