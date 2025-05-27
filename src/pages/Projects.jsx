// Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Smart Educational Backpack",
      description: "An IoT-based solution using RFID to help students manage books and schedules efficiently.",
    },
    {
      title: "Automatic Wall Painting Roller",
      description: "Designed to support Somali painters by reducing manual effort and improving painting efficiency.",
    },
    {
      title: "Real-Time Stress Detection System",
      description: "Uses Arduino sensors and Processing to monitor heart rate and activate mist spray to relieve stress.",
    }
  ];

  return (
    <motion.div 
      className="space-y-10 py-16 px-4 sm:px-8 lg:px-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center">Highlighted Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;