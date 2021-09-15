import React from "react";
import "./HeroCard.scss";
import { Link } from "react-router-dom";

const HeroCard = ({ src, cardTitle, link }) => {
  return (
    <section className="herocard-container">
      <Link to={link}>
        <img src={src} alt={src} />
        <strong>{cardTitle}</strong>
      </Link>
    </section>
  );
};

export default HeroCard;
