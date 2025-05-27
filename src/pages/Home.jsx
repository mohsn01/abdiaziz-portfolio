// Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => (
  <motion.div 
    className="text-center space-y-6"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
    <p className="text-lg max-w-xl mx-auto">
      I'm Abdiaziz Omar Hassan, a passionate engineer and researcher focused on Industrial Design, InfoSec, IoT, and Data Science.
      Explore my journey through interactive coursework, live demos, and documented research.
    </p>
    <div className="flex justify-center gap-4 mt-6">
      <a href="/projects" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">View Projects</a>
      <a href="/contact" className="bg-white border border-blue-700 text-blue-700 px-6 py-2 rounded hover:bg-blue-50 transition">Get in Touch</a>
    </div>
  </motion.div>
);

export default Home;