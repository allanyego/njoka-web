import { motion } from "framer-motion";

import "./Card.css";

export default function Card({ title, body, image }) {
  return (
    <div className="uk-width-1-3">
      <motion.div
        className="uk-card uk-card-body uk-border-rounded uk-padding-small about-card"
        whileHover={{
          backgroundColor: "var(--color-secondary)",
          color: "var(--color-light)",
        }}
      >
        <div className="uk-flex uk-flex-center media-wrapper">
          <img src={image} alt="service media" />
        </div>
        <h3 className="uk-card-title uk-text-center uk-text-uppercase">
          {title}
        </h3>
        <p>{body}</p>
      </motion.div>
    </div>
  );
}
