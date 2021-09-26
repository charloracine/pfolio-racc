import React from "react";
import Layout from "../Layout/Layout";
import experienceData from "../../data/experience.json";
import "./About.scss";
import { HashLink } from "react-router-hash-link";

const About = () => {
  const hexScale = 5;
  const infos = {
    leftPanel: {
      titre: "À propos",
      nom: "Charles-Olivier Racine",
      text: {
        firstRow: "Jeune, dynamique et polyvalent. ",
        secondRow: "La résolution de problème, c'est mon « flow »",
      },
    },
  };

  const style = {
    height: "auto",
  };

  const rightPanel = () => {
    return (
      <>
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
      <>
        <div className="bottom-nav">
          <HashLink to="#experience" smooth>
            <div className="r-arrow">
              <i className="fas fa-long-arrow-alt-down"></i>
            </div>
          </HashLink>
        </div>
      </>
    );
  };

  return (
    <Layout
      infos={infos}
      rightPanel={rightPanel}
      autreFx={bottomNav}
      mainStyleHeight={style}
    >
      <div id="experience">
        {experienceData.map(({ id, titre, cards }) => (
          <div key={id} className="exp-card-wrapper">
            <h1>{titre}</h1>
            <section className="exp-container">
              {cards.map(({ id, where, what, type, listed }) => (
                <article key={id} className="exp-card">
                  <p>{where}</p>
                  <h2>{what}</h2>
                  <div className="tasks">
                    <span>{type}</span>
                    <ul>
                      {listed.map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </section>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default About;
