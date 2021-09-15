import React, {useState, useEffect} from "react";
import "./NavBar.scss";
import Logo from "./Logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className={`navbar-sticky-wrapper ${click && "open"}`}>
        <section className="navbar-logo-name">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={Logo} alt="Logo" />
          </Link>
          <h1>Charles-Olivier Racine</h1>
        </section>
        <nav className="navbar-nav">
          <ul>
            <li className="navbar-nav-items">
              <Link to="/" onClick={closeMobileMenu}>Accueil</Link>
            </li>
            <li className="navbar-nav-items">
              <Link to="/projects" onClick={closeMobileMenu}>Projets</Link>
            </li>
            <li className="navbar-nav-items">
              <Link to="/about" onClick={closeMobileMenu}>À propos</Link>
            </li>
            <li className="navbar-nav-items">
              <Link to="/contact" onClick={closeMobileMenu}>Contacter</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
