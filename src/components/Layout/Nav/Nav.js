import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { titre: "à propos", path: "/about" },
    { titre: "portfolio", path: "/portfolio" },
    { titre: "contact", path: "/contact" },
  ];

  return (
    <div className="menu-wrapper">
      <Link to="/">
        <div className="logo-wrapper">
          <img src="./images/Logo.svg" alt="Mon logo hexagonale" />
        </div>
      </Link>
      <nav className="main-menu">
        <ul>
          {navItems.map(({ titre, path }) => (
            <li key={titre}>
              <Link to={path}>{titre}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
