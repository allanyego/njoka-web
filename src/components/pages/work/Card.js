import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import SkillBadge from "../../core/SkillBadge";

import "./Card.css";

const ANIMATION_VARIANTS = {
  visible: {
    bottom: 0,
  },
  hidden: {
    bottom: -150,
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
      <div className="uk-flex skills">
        {skills.map((skill, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SkillBadge value={skill} key={index} small />
        ))}
      </div>
      <div className="uk-margin-small-top">
        <Link
          to={`/work/${_id}`}
          className="uk-button uk-button-default uk-button-small"
          type="button"
        >
          <FontAwesomeIcon icon="eye" className="uk-margin-small-right" />
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

        <AnimatePresence>
          {isVisible && <CardBody {...{ _id, projectName, skills }} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
