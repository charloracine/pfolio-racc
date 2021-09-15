import React from "react";
import "./Hero.scss";
import HeroCard from "../HeroCard/HeroCard";

const Hero = () => {
  return (
    <div className="hero-container">
      <HeroCard src="/images/projet.jpg" cardTitle="Projets" link="/projects" />
      <HeroCard src="/images/hello.jpg" cardTitle="À propos" link="/about" />
      <HeroCard src="/images/message.jpg" cardTitle="Contacter" link="/contact" />
    </div>
  );
};

export default Hero;
