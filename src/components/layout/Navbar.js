import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import "./Navbar.css";

function LinkComponent({ href, children, navigate, ...props }) {
  return (
    <li {...props}>
      <a href={href}>{children}</a>
      <div className="active-indicator" />
    </li>
  );
}

function NavItem({ label, ...props }) {
  return (
    <NavLink {...props} activeClassName="uk-active" component={LinkComponent}>
      {label}
    </NavLink>
  );
}

const NAV_ITEMS = [
  {
    key: 1,
    label: "Home",
    to: "/",
    exact: true,
  },
  {
    key: 2,
    label: "About",
    to: "/about",
  },
  {
    key: 3,
    label: "Services",
    to: "/services",
  },
  {
    key: 4,
    label: "Work",
    to: "/work",
  },
  {
    key: 5,
    label: "Contact",
    to: "/contact",
  },
  // {
  //   key: 6,
  //   label: "Skills",
  //   to: "/skills",
  // },
];

export default function Navbar() {
  return (
    <header>
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <NavItem label={<img src={logo} alt="brand" />} to="/" exact />
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav inline">
            {NAV_ITEMS.map(({ key, ...props }) => (
              <NavItem {...props} key={key} />
            ))}
          </ul>
          <ul className="uk-navbar-nav">
            <li>
              <button
                className="uk-button uk-button-link uk-text-danger"
                type="button"
                style={{
                  padding: "0 15px",
                }}
              >
                <FontAwesomeIcon icon="sign-out-alt" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
