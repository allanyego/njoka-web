import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faGithubAlt,
  faHtml5,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faBoxes,
  faCheckCircle,
  faEye,
  faFileAlt,
  faImage,
  faKey,
  faLaptopCode,
  faMapMarker,
  faPaperPlane,
  faPhone,
  faPlus,
  faSave,
  faSignInAlt,
  faSignOutAlt,
  faSpinner,
  faTimes,
  faTimesCircle,
  faUser,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

library.add(
  faAt,
  faBoxes,
  faEye,
  faImage,
  faKey,
  faFacebookF,
  faFileAlt,
  faLaptopCode,
  faPhone,
  faMapMarker,
  faTwitter,
  faHtml5,
  faGithubAlt,
  faLinkedinIn,
  faInstagram,
  faPaperPlane,
  faPlus,
  faUserCog,
  faUser,
  faSave,
  faSpinner,
  faSignInAlt,
  faSignOutAlt,
  faTimes,
  faTimesCircle,
  faCheckCircle
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
