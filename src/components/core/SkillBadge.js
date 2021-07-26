/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SkillBadge.css";

export default function SkillBadge({ value, onClose, small = false }) {
  return (
    <div
      className={`uk-badge uk-flex uk-flex-middle skill-badge ${
        small ? "small" : ""
      }`}
    >
      <span className="uk-display-block">{value}</span>
      {onClose && (
        <div
          role="button"
          className="uk-flex uk-flex-middle uk-flex-center"
          onClick={onClose}
        >
          <FontAwesomeIcon icon="times" />
        </div>
      )}
    </div>
  );
}
