// CV.jsx
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CV = () => (
  <motion.div 
    className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Header subtitle="Curriculum Vitae" />

    <main className="flex-grow max-w-6xl mx-auto py-16 px-4 sm:px-8 lg:px-24 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Download or View My CV</h2>
      <p className="text-gray-600 mb-8">Professional background, qualifications, and experience</p>

      <a href="/MahirCV.pdf" download className="text-white bg-blue-700 hover:bg-blue-800 transition px-6 py-3 rounded shadow inline-block mb-8">
        Download CV (PDF)
      </a>

      <div className="relative border rounded-lg overflow-hidden shadow-xl">
        <iframe
          src="/MahirCV.pdf"
          title="CV Viewer"
          width="100%"
          height="700px"
          className="border-none"
        />
      </div>
    </main>

    <Footer />
  </motion.div>
);

export default CV;
