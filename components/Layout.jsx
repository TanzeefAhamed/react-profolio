import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <img src="/public/logo.png" alt="My Logo" 
      style={{ width: "100px", display: "block", margin: "70 auto" }} />

      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/education">Education</Link>|
        <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>|
        <li><Link to="/services">Services</Link></li>
      </nav>
      <br />
      <hr />
    </div>
  );
}
