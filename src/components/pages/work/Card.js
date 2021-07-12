import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const ANIMATION_VARIANTS = {
  visible: {
    bottom: 0,
  },
  hidden: {
    bottom: -85,
  },
};

function CardBody({ projectName, skills, _id }) {
  return (
    <motion.div
      className="uk-padding-small body"
      variants={ANIMATION_VARIANTS}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h5 className="uk-text-capitalize uk-text-bolder uk-margin-small-bottom">
        {projectName}
      </h5>
      <div className="uk-flex uk-flex-center skills">
        {skills.map((skill, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="uk-badge">
            {skill}
          </div>
        ))}
      </div>
      <div className="uk-flex uk-flex-center uk-margin-small-top">
        <Link
          to={`/work/${_id}`}
          className="uk-button uk-button-default uk-button-small"
          type="button"
        >
          View
        </Link>
      </div>
    </motion.div>
  );
}

export default function Card({ _id, image, projectName, skills }) {
  const [isVisible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!isVisible);

  return (
    <div className="uk-width-1-3">
      <div
        className="uk-card uk-card-hover uk-overflow-hidden project-card"
        onMouseEnter={toggleVisible}
        onMouseLeave={toggleVisible}
      >
        <div className="uk-height-1-1">
          <img src={image} alt="project preview" />
        </div>

        <CardBody {...{ _id, projectName, skills }} />
        {/* <AnimatePresence>
          {isVisible && <CardBody {...{ _id, projectName, skills }} />}
        </AnimatePresence> */}
      </div>
    </div>
  );
}
