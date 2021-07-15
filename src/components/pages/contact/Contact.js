/* eslint-disable react/no-array-index-key */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contact.css";

function Detail({ icon, label }) {
  return (
    <div className="uk-flex uk-flex-middle contact-detail">
      <FontAwesomeIcon icon={icon} />
      <span className="uk-display-block uk-text-bold">{label}</span>
    </div>
  );
}

export default function Contact({ mobile, email, location }) {
  return (
    <div className="uk-flex uk-flex-column contact-info">
      {mobile.map((m, index) => (
        <Detail icon="phone" label={m} key={index} />
      ))}

      {email.map((e, index) => (
        <Detail icon="at" label={e} key={index} />
      ))}

      <Detail icon="map-marker" label={location} />
    </div>
  );
}
