// Header.jsx
import React from "react";

const Header = ({ subtitle }) => (
  <header className="bg-blue-900 text-white py-6 shadow">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">Abdiaziz Omar Hassan</h1>
      {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
    </div>
  </header>
);

export default Header;