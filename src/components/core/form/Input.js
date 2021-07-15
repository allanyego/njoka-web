import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputFeedback from "./InputFeedback";

function InputEl(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id || props.name;

  return (
    <>
      <input
        className="uk-input"
        {...{
          ...props,
          id,
        }}
      />
    </>
  );
}

export default function Input({ icon, error, type = "text", ...props }) {
  return (
    <div>
      {icon ? (
        <div className="uk-inline">
          <span className="uk-form-icon">
            <FontAwesomeIcon icon={icon} />
          </span>
          <InputEl {...props} type={type} />
        </div>
      ) : (
        <InputEl {...props} type={type} />
      )}

      {error && <InputFeedback message={error} />}
    </div>
  );
}
