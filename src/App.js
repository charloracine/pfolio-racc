import "./App.css";
import "./reset.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
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
