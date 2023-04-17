import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
            alt="Rick and Morty"
            className="logo"
          />
        </div>
        <div className="navbar-text">
          <h2>Explorador de personajes de Rick y Morty</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
