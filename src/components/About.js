// Example in Home.js

import React from 'react';

import { useNavigate } from 'react-router-dom';

import "./about.css"

function About() {

  const naviagte=useNavigate()
  return (
    <div className='container'>
    <div className='card-container'>
      <h3 className='main-heading'>UI/UX DESIGNER</h3>
      <h1 className='card-title'>Hello , My name is Madelyn Torff</h1>
      <p className='card-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <button  className="project-button" onClick={()=>naviagte("/about")}>Project</button>
      <button className='linkedIn-button'>LinkedIn</button>
    </div>
    </div>
  );
};

export default About;
