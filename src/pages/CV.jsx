// CV.jsx
import React from "react";

const CV = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Curriculum Vitae</h2>
    <p>You can download my CV here: <a href="/MahirCV.pdf" download className="text-blue-600 underline">Download PDF</a></p>
    <iframe src="/MahirCV.pdf" width="100%" height="600px" title="CV Viewer"></iframe>
  </div>
);

export default CV;