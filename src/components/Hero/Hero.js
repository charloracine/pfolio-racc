import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="herocard-container">
        <Link to="/projects">
          <img src="/images/prog.jpg" alt="" />
          <strong>Projets</strong>
        </Link>
      </section>
      <section className="herocard-container">
        <Link to="/about">
          <img src="/images/prog.jpg" alt="" />
          <strong>À propos</strong>
        </Link>
      </section>
      <section className="herocard-container">
        <Link to="contact">
          <img src="/images/prog.jpg" alt="" />
          <strong>Contacter</strong>
        </Link>
      </section>
    </div>
  );
};

export default Hero;
