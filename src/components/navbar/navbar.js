// components/Navbar/Navbar.js
import React from 'react';
import CardWidget from '../cardwidget/cardwidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Mi Landing Page</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Acerca de nosotros</a>
            </li>
            <li className="nav-item">
              <CardWidget message="¡Hola desde el CardWidget!" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
