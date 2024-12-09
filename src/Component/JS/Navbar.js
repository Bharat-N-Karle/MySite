import React, { useState } from 'react';
import '../CSS/Navbar.css'; // Importing the CSS file for the navbar styles

const Navbar = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#section1">Skills</a></li>
            <li><a href="#section2">Projects</a></li>
            <li><a href="#section3">Contact Us</a></li>
          </ul>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
