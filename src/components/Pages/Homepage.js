import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const Homepage = () => {
  const hexScale = 5;

  const style = {
    height: "100vh",
  };

  const infos = {
    leftPanel: {
      titre: "développeur web frontend",
      nom: "charles-o.",
      text: {
        firstRow: "Finissant en Techniques d’intégration multimédia, ",
        secondRow: " profil logique. Mention DEC+ Ultra.",
      },
    },
  };

  const rightPanel = () => {
    return (
      <>
        <div className="ma-photo">
          <img src="/images/photo4.png" alt="Moi sur un rocher" />
        </div>
        <div className="svg-wrapper">
          <div className="svg-holder">
            <div className="box-shadow"></div>
            <svg height={`${180 * hexScale}`} width={`${155 * hexScale}`}>
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 160, 117, 1)" />
                  <stop offset="100%" stopColor="rgba(44, 184, 215, 0.25)" />
                </linearGradient>
              </defs>
              <polygon
                fill="url(#grad)"
                points={`0 ${50 * hexScale}, ${80 * hexScale} 0, ${
                  155 * hexScale
                } ${50 * hexScale}, ${155 * hexScale} ${130 * hexScale}, ${
                  80 * hexScale
                } ${180 * hexScale}, 0 ${130 * hexScale}`}
              />
            </svg>
          </div>
        </div>
      </>
    );
  };

  const bottomNav = () => {
    return (
      <div className="bottom-nav">
        <Link to="/portfolio">
          <div className="r-arrow">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </Link>
        <p>
          <Link to="/portfolio">Portfolio</Link>
        </p>
      </div>
    );
  };

  return (
    <Layout
      infos={infos}
      mainStyleHeight={style}
      rightPanel={rightPanel}
      autreFx={bottomNav}
    ></Layout>
  );
};

export default Homepage;
