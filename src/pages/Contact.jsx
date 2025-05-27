// Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Your Message" rows="5" className="w-full p-2 border rounded"></textarea>
      <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Send</button>
    </form>
    <div className="mt-6">
      <p>Email: your-email@example.com</p>
      <p>LinkedIn: <a href="#" className="text-blue-600 underline">LinkedIn Profile</a></p>
      <p>GitHub: <a href="#" className="text-blue-600 underline">GitHub Profile</a></p>
    </div>
  </div>
);

export default Contact;