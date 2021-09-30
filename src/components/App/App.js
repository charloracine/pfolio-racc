import React, { useEffect, useState } from "react";
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
import { StackedImage } from "../Image/Image";
import { size } from "../Device/Device";
import { colors } from "../Colors/Colors";

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
      <div className="App" style={{ backgroundColor: "white" }}>
        <AppBar />
        <Column size="1" justify="flex-end">
          <Column size="1" overflow="hidden">
            <img
              src={
                width >= parseInt(size.mobileL)
                  ? "/images/desktop1920.jpg"
                  : "/images/mobileme.png"
              }
              alt="Mon logo à moi"
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                height: "100vh",
                overflow: "hidden",
              }}
            />
          </Column>
        </Column>
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
