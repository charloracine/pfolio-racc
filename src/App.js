import "./App.css";
import "./reset.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import { useLayoutEffect } from "react";
import { useController } from "react-scroll-parallax";

function App() {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener("load", handler);
    return () => window.removeEventListener("load", handler);
  }, [parallaxController]);

  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
