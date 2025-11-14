import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import AchievementTimeline from './Achievements';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './NavBar';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "60px" }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<AchievementTimeline />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;