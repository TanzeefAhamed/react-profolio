import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/components/Home";
import About from "./src/about";
import Contact from "./src/contact";
import Education from "./src/education";
import Project from "./src/project";
import Layout from "./src/components/Layout";
import Services from "./src/services";
import Signup from "./src/components/Signup";
import Signin from "./src/components/Signin";

const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default MainRouter;