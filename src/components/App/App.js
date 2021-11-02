import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Container } from "../Container/Container";
import "./App.css";
import "@fontsource/roboto";
import "@fontsource/merriweather";
import "@fontsource/work-sans";

import AppBar from "../AppBar/AppBar";
import Homepage from "../Pages/Homepage";
import Portfolio from "../Pages/Portfolio";
import About from "../Pages/About";
import projectData from "../../data/data.json";
import Contact from "../Pages/Contact";
import { Column } from "../Container/Container";
import { size } from "../Device/Device";
import { useWindowSize } from "../../hooks/useWindowSize";

function App() {
  const { width } = useWindowSize();

  const src = () => {
    if (width < parseInt(size.mobileL)) return "/images/mobileme.png";
    else if (width > parseInt(size.laptopL)) return "/images/desktop1920.jpg";
    else return "/images/laptopme.jpg";
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "white" }}>
        <AppBar />
        <Column size="1" justify="flex-end">
          <Column size="1" overflow="hidden" pd="0">
            <img
              src={src()}
              alt="C'est moi!"
              style={{
                position: "fixed",
                top: "0",
                left: `${width > parseInt(size.laptopL) ? "0" : ""}`,
                right: `${width <= parseInt(size.laptopL) ? "0" : ""}`,
                minHeight: "100vh",
                minWidth: "100vw",
                overflow: "hidden",
              }}
            />
          </Column>
        </Column>
        <Column justify="center">
          <Container
            pdt={width < size.laptop ? "4em" : "8em"}
            justify="flex-start"
            className="content"
          >
            <Switch>
              <Route path="/homepage">
                <Homepage />
              </Route>
              <Route path="/portfolio">
                <Portfolio projects={projectData} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Redirect to="/homepage" />
            </Switch>
          </Container>
        </Column>
      </div>
    </BrowserRouter>
  );
}

export default App;
