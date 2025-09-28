import React, { useState } from "react";
import { useNavigate } from "react-router-dom";





//Contact component with a form for users to fill out
//Includes state management for form fields and a submit handler

export default function Contact() {
  //State to keep track of what the user types
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  //Hook to send user back to Home page after submit
  const navigate = useNavigate();

  //Function to update state when typing in fields
  function handleChange(event) {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value 
    });
  }

  //Function for when the form is submitted
  function handleSubmit(event) {
    event.preventDefault(); 
    alert("Thank you " + formData.firstName + "! Your message has been saved.");
    navigate("/"); 
  }

  return (
    <div>
      <h1>Contact Me</h1>

      {/* Contact Info Panel */}
      <div>
        <p><b>Email:</b> tanzeef@email.com</p>
        <p><b>Phone:</b> 123-456-7890</p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <p>
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            onChange={handleChange} 
            required 
          />
        </p>

        <p>
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            onChange={handleChange} 
            required 
          />
        </p>

        <p>
          <input 
            type="text" 
            name="phone" 
            placeholder="Contact Number" 
            onChange={handleChange} 
            required 
          />
        </p>

        <p>
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            onChange={handleChange} 
            required 
          />
        </p>

        <p>
          <textarea 
            name="message" 
            placeholder="Message" 
            onChange={handleChange}
          />
        </p>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
