import React from "react";
import "./Hero.scss";
import HeroCard from "../HeroCard/HeroCard";
import Data from "../../data/data.json";

const CardsData = [...Data.card];

const Hero = () => {
  return (
    <div className="hero-container">
      {CardsData.map((e) => (
        <HeroCard key={e.id} src={e.images} cardTitle={e.name} link={e.path} />
      ))}
    </div>
  );
};

export default Hero;
