import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Container } from "../Container/Container";
import "./App.css";
import "@fontsource/roboto";
import AppBar from "../AppBar/AppBar";
import Homepage from "../Pages/Homepage";
import Portfolio from "../Pages/Portfolio";
import About from "../Pages/About";
import projectData from "../../data/data.json";
import Contact from "../Pages/Contact";
import { Column } from "../Container/Container";
import { StackedImage } from "../Image/Image";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppBar />
        <Column justify="center">
          <Column justify="center" position="fixed" zIndex="0" pdt="8em">
            <StackedImage pd="1em 0">
              <img
                src="/images/Logo.svg"
                alt="Mon logo à moi"
                className="logo"
              />
              <img
                src="/images/maphoto.png"
                alt="Moi sur une roche"
                className="moi"
              />
            </StackedImage>
          </Column>
        </Column>
        <Container pdt="4em">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
