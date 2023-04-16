import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink activeClassName="active-link" exact to="/">
            Personajes
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" to="/episodios">
            Episodios
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" to="/ubicaciones">
            Ubicaciones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
