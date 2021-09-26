import React from "react";
import "./Layout.scss";
import Nav from "./Nav/Nav";

const Layout = ({ infos, mainStyleHeight, rightPanel, autreFx, children }) => {
  const { titre, nom, text } = infos.leftPanel;
  return (
    <main style={mainStyleHeight} >
      <section className="background-fixed">{rightPanel()}</section>
      <div className="panel-container">
        <section className="left-panel">
          <Nav />
          <div>
            <div className="homepage-info-wrapper">
              <p>{titre}</p>
              <h1>{nom}</h1>
              <p>
                {text.firstRow}
                <br />
                {text.secondRow}
              </p>
              {autreFx()}
            </div>
          </div>
        </section>
        <section className="empty-right-panel"></section>
      </div>
      {children}
    </main>
  );
};

export default Layout;
