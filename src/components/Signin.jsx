import React, { useState } from 'react';
import { signin } from '../api/api-auth'; // Corrected path to src/api
import auth from '../auth/auth-helper';   // Corrected path to src/auth
import { Navigate } from 'react-router-dom'; // Use Navigate instead of Redirect for newer React

export default function Signin() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  });

  const clickSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        // Save token and redirect
        auth.authenticate(data, () => {
          setValues({ ...values, error: '', redirectToReferrer: true });
        });
      }
    });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const { redirectToReferrer } = values;
  if (redirectToReferrer) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Sign In</h2>
      <form style={{ display: 'inline-block', border: '1px solid #ccc', padding: '20px' }}>
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
    </div>
  );
}