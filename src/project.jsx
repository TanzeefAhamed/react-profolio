import React, { useState, useEffect } from 'react';
import auth from "./auth/auth-helper"; // Assuming you have this

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '' });

  useEffect(() => {
    // Fetch projects
    fetch('http://localhost:3000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = name => event => {
    setNewProject({ ...newProject, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jwt = auth.isAuthenticated(); // This checks for the user token
    
    // Only fetch if logged in
    fetch('http://localhost:3000/api/projects', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + (jwt ? jwt.token : '') // Sends the token
      },
      body: JSON.stringify(newProject)
    })
    .then(response => response.json())
    .then(data => {
      setProjects([...projects, data]);
      setNewProject({ title: '', description: '' });
    })
  };

  return (
    <div>
      <h2>Project Page</h2>
      {auth.isAuthenticated() && (
        <div>
           {/* This form is hidden unless logged in */}
           <input type="text" onChange={handleChange('title')} value={newProject.title} placeholder="Title"/>
           <textarea onChange={handleChange('description')} value={newProject.description} placeholder="Desc"/>
           <button onClick={handleSubmit}>Add</button>
        </div>
      )}
      
      {/* List of projects always shows */}
      {projects.map((p, i) => <div key={i}>{p.title}</div>)}
    </div>
  );
}