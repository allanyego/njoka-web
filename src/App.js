import { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";
import backgroundSvg from "./assets/images/bottom.svg";
import topSvg from "./assets/images/top.svg";
import rightSvg from "./assets/images/right.svg";
import Navbar from "./components/layout/Navbar";
import SocialsSidepane from "./components/socials-sidepane";
import Notifications from "./components/core/notifications";
import { AppContext } from "./services/context";
import Loader from "./components/core/Loader";

const NewService = lazy(() => import("./pages/admin/service/New"));
const NewWork = lazy(() => import("./pages/admin/work/New"));
const Login = lazy(() => import("./pages/admin/Login"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Skills = lazy(() => import("./pages/Skills"));
const Work = lazy(() => import("./pages/Work"));

function App() {
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider
      value={{
        notifications,
        setNotifications,
        user,
        setUser,
      }}
    >
      <Router>
        <div className="App">
          <Navbar />
          <SocialsSidepane />
          <main>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/services" component={Services} exact />
                <Route path="/work" component={Work} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/skills" component={Skills} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/work/new" component={NewWork} exact />
                <Route path="/service/new" component={NewService} exact />

                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </Suspense>
          </main>
          <img
            className="bottom-background-svg"
            src={backgroundSvg}
            alt="background graphic"
          />
          <img
            className="top-background-svg"
            src={topSvg}
            alt="background graphic"
          />
          <img
            className="right-background-svg"
            src={rightSvg}
            alt="background graphic"
          />
          <Notifications />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
