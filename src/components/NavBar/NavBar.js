import React, { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import Data from "../../data/data.json";

const logoData = { ...Data.logo };
const navData = [...Data.nav];

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
          <Link to={logoData.path} onClick={closeMobileMenu}>
            <img src={logoData.src} alt={logoData.alt} />
          </Link>
          <h1>{`${Data.user.prenom} ${Data.user.nom}`}</h1>
        </section>
        <nav className="navbar-nav">
          <ul>
            {navData.map((e) => (
              <li key={e.id} className="navbar-nav-items">
                <Link to={e.path} onClick={closeMobileMenu}>
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
