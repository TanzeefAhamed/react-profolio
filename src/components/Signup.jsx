import React, { useState } from 'react';
import { create } from '../api/api-user'; // Corrected path
import { Link } from 'react-router-dom';

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault(); // Stop page refresh
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    };

    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', open: true });
      }
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Sign Up</h2>
      
      {!values.open ? (
        <form style={{ display: 'inline-block', border: '1px solid #ccc', padding: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <label>Name: </label>
            <input type="text" onChange={handleChange('name')} value={values.name} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Email: </label>
            <input type="email" onChange={handleChange('email')} value={values.email} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Password: </label>
            <input type="password" onChange={handleChange('password')} value={values.password} />
          </div>
          <button onClick={clickSubmit}>Submit</button>
          
          {values.error && <p style={{ color: 'red' }}>{values.error}</p>}
        </form>
      ) : (
        <div>
          <h3>New account created successfully!</h3>
          <Link to="/signin">Sign In</Link>
        </div>
      )}
    </div>
  );
}