// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Coursework from "./pages/Coursework";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-blue-900 text-white py-6 shadow">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Abdiaziz Omar Hassan</h1>
            <p className="text-lg mt-2">Industrial Design Engineer | InfoSec Specialist | IoT & Data Science Enthusiast</p>
          </div>
        </header>

        <nav className="bg-blue-800 text-white py-3 shadow-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto flex justify-center gap-6">
            <NavLink to="/" className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>Home</NavLink>
            <NavLink to="/coursework" className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>Coursework</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>Projects</NavLink>
            <NavLink to="/research" className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>Research</NavLink>
            <NavLink to="/cv" className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>CV</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>Contact</NavLink>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto p-6 animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coursework" element={<Coursework />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-blue-800 text-white text-center py-4">
          <p>&copy; 2025 Abdiaziz Omar Hassan. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
