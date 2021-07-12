import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social({ href, icon }) {
  return (
    <a href={href}>
      <FontAwesomeIcon icon={["fab", icon]} />
    </a>
  );
}
