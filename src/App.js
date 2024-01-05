

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  
  return (
    <div>
    <Navbar/>
    <Routes>
        <Route path="/" exact element={<About/>} />
        <Route path="/about" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
  );
};

export default App;
