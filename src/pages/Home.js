import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import smileyFace from "../assets/images/smiley-face.svg";
import "./Home.css";

export default function Home() {
  return (
    <div className="uk-flex uk-flex-middle uk-flex-center uk-height-1-1 home-page">
      <div>
        <h1 className="uk-heading-small">Hey, I&apos;m Collins...</h1>
        <p className="uk-text-large">
          ... I can help you build your next website.
        </p>
        <Link to="/contact">
          <motion.button
            type="button"
            className="uk-button uk-button-secondary"
            animate={{
              scale: [1.1, 1, 1.1, 1, 1.1, 1.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              delay: 0.8,
            }}
          >
            <FontAwesomeIcon icon="phone" className="uk-margin-small-right" />
            Contact Me
          </motion.button>
        </Link>
        <p className="uk-flex uk-flex-middle">
          Or, have a look around.{" "}
          <img
            src={smileyFace}
            alt="smiley face"
            className="uk-margin-small-left"
          />
        </p>
      </div>
    </div>
  );
}
