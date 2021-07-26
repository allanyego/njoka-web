/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { useAppContext } from "../../../services/context";
import "./style.css";

const ANIMATION_VARIANTS = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  enter: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
};

function Notification({
  callout,
  onClose,
  duration = 5000,
  _id,
  message,
  type = "success",
}) {
  const isSuccess = type === "success";

  const handleClose = () => onClose(_id);

  useEffect(() => {
    const t = setTimeout(handleClose, duration);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      role="alert"
      onClick={handleClose}
      className={`notification uk-flex uk-flex-stretch uk-border-rounded ${
        isSuccess ? "" : "danger"
      }`}
      variants={ANIMATION_VARIANTS}
      initial="initial"
      animate="enter"
      exit="exit"
      positionTransition
    >
      <div className="uk-flex uk-flex-middle uk-flex-center uk-padding-small">
        <FontAwesomeIcon
          icon={isSuccess ? "check-circle" : "times-circle"}
          size="2x"
        />
      </div>
      <div className="uk-padding-small uk-flex uk-flex-middle">
        <strong>{callout} </strong>
        {message}
      </div>
    </motion.div>
  );
}

export default function index() {
  const { notifications, setNotifications } = useAppContext();

  const handleClose = (_id) => {
    setNotifications([...notifications.filter((n) => n._id !== _id)]);
  };

  return (
    <div className="notifications-container">
      <AnimatePresence initial={false}>
        {notifications.map((notification) => (
          <Notification
            key={notification._id}
            {...notification}
            onClose={handleClose}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
