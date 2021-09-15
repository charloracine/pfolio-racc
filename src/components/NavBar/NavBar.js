import React from "react";
import "./NavBar.scss";
import Logo from "./Logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-sticky-wrapper">
      <section className="navbar-logo-name">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <h1>Charles-Olivier Racine</h1>
      </section>
      <nav className="navbar-nav">
        <ul>
          <li className="navbar-nav-items">
            <Link to="/">Accueil</Link>
          </li>
          <li className="navbar-nav-items">
            <Link to="/projects">Projets</Link>
          </li>
          <li className="navbar-nav-items">
            <Link to="/about">À propos</Link>
          </li>
          <li className="navbar-nav-items">
            <Link to="/contact">Contacter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
