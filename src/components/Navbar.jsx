import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Rick & Morty</a>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/personajes">Personajes</a>
          </li>
          <li>
            <a href="/episodios">Episodios</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
