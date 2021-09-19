import React from "react";
import "./HeroCard.scss";
import { Link } from "react-router-dom";
import useWindowDimensions from "../WindowDimensionsHook/useWindowDimensions";

const HeroCard = ({ src, cardTitle, link }) => {
  const { width } = useWindowDimensions();

  return (
    <section className="herocard-container">
      <Link to={link}>
        <img src={width<425? src.mobile : src.web} alt={src} />
        <strong>{cardTitle}</strong>
      </Link>
    </section>
  );
};

export default HeroCard;
