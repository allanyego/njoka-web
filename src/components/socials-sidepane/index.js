import Social from "./Social";
import "./styles.css";

const SOCIALS = [
  {
    key: 1,
    href: "link/to/social",
    icon: "linkedin-in",
  },
  {
    key: 2,
    href: "link/to/social",
    icon: "github-alt",
  },
  {
    key: 3,
    href: "link/to/social",
    icon: "facebook-f",
  },
  {
    key: 4,
    href: "link/to/social",
    icon: "twitter",
  },
  {
    key: 5,
    href: "link/to/social",
    icon: "instagram",
  },
];

export default function index() {
  return (
    <div className="uk-flex uk-flex-column uk-flex-middle uk-flex-center socials-sidepane">
      {SOCIALS.map(({ key, ...props }) => (
        <Social key={key} {...props} />
      ))}
    </div>
  );
}
