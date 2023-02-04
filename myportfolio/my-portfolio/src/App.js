import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
