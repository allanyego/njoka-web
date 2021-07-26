import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Button.css";

function ButtonIcon({ icon, isLoading }) {
  return (
    <FontAwesomeIcon
      icon={isLoading ? "spinner" : icon}
      spin={isLoading}
      className="uk-margin-small-right"
    />
  );
}

export default function Button({
  icon,
  children,
  isLoading,
  type = "button",
  disabled = false,
  ...props
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button disabled={isLoading || disabled} type={type} {...props}>
      {icon && (
        <ButtonIcon
          {...{
            icon,
            isLoading,
          }}
        />
      )}
      {children}
    </button>
  );
}
