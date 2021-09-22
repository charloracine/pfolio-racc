import React from "react";
import Hero from "../Hero/Hero";
import "./Home.scss";
import Logo from "../NavBar/Logo.svg";

const Home = () => {
  return (
    <>
      <main className="global-wrapper">
        <section className="background-svg-wrapper"></section>
        <div className="hero-wrapper">
          <header className="hero">
            <div className="hero-info">
              <div className="main-menu-wrapper">
                <div className="logo-wrapper">
                  <img src={Logo} alt="image du logo" />
                </div>
                <nav>
                  <ul>
                    <li>À propos</li>
                    <li>Portfolio</li>
                    <li>Contacter</li>
                  </ul>
                </nav>
              </div>
              <div className="hero-text-wrapper">
                <div className="hero-seg">
                  <p>Titre professionnel</p>
                </div>
                <div className="hero-seg">
                  <h1>PRENOM NOM</h1>
                </div>
                <div className="hero-seg">
                  <p>
                    quote cute Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit.
                  </p>
                </div>
                <div className="hero-seg">
                  <div className="icon-item">
                    <i className="fas fa-chevron-right" />
                  </div>
                  <p>Voir plus</p>
                </div>
              </div>
            </div>
            <div className="empty">
              <div className="socials-wrapper">
                <ul>
                  <li className="icon-item">
                    <i className="fab fa-linkedin-in" />
                  </li>
                  <li className="icon-item">
                    <i className="cv-icon">cv</i>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>

        <section className="cards-wrapper">
          <article className="card-item">
            <div className="card-info">
              <strong>TITRE DE LA CARTE</strong>
            </div>
            <div className="card-buttons">
              <div className="icon-item">
                <i className="fas fa-chevron-right" />
              </div>
            </div>
          </article>
        </section>

        <footer></footer>
      </main>
    </>
  );
};

export default Home;
