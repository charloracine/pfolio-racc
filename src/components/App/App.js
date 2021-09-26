import Homepage from "../Pages/Homepage";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Portfolio from "../Pages/Portfolio";
import "./App.scss";
import "./reset.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
