import React, { useEffect, useState } from "react";
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
import { size } from "../Device/Device";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <BrowserRouter>
      <div className="App">
        <AppBar />
        {width >= parseInt(size.laptop) ? (
          <Column size="1" justify="flex-end">
            <Column
              justify="center"
              size="1"
              position="fixed"
              pdt="5em"
              pdr="2em"
            >
              <StackedImage pd="1em 0" className="desktop">
                <img
                  src="/images/Logo.svg"
                  alt="Mon logo à moi"
                  className="logo"
                />
                <img
                  src="/images/maphoto.png"
                  alt="Moi sur une roche"
                  className="moi desktop"
                />
              </StackedImage>
            </Column>
          </Column>
        ) : (
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
        )}
        <Column justify="center">
          <Container pdt="4em" justify="flex-start" className="content">
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
