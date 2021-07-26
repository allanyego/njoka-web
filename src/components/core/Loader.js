import { motion } from "framer-motion";

import "./Loader.css";

const ANIMATION_VARIANTS = {
  load: {
    left: ["0%", "50%", "80%", "50%", "0%"],
    marginLeft: ["0%", "-20%", "0%", "-20%", "0%"],
    width: ["20%", "40%", "20%", "40%", "20%"],
  },
};

const TRANSITION = {
  repeat: Infinity,
  duration: 1.5,
  ease: "linear",
};

export default function Loader() {
  return (
    <div className="uk-flex uk-flex-center uk-flex-middle uk-height-1-1 loader">
      <div>
        <p className="uk-text-center">Hold on...</p>
        <div className="loader-pill">
          <motion.div
            variants={ANIMATION_VARIANTS}
            animate="load"
            transition={TRANSITION}
          />
        </div>
      </div>
    </div>
  );
}
