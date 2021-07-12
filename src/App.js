import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import SocialsSidepane from "./components/socials-sidepane";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SocialsSidepane />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/services" component={Services} exact />
            <Route path="/work" component={Work} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/skills" component={Skills} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
