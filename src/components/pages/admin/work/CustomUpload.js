import { useRef, useState } from "react";
import {
  MAX_ATTACHMENT_SIZE,
  PROFILE_PICTURE_FORMATS,
} from "../../../../services/http/lib/globals";
import Button from "../../../core/Button";
import InputFeedback from "../../../core/form/InputFeedback";

export default function CustomUpload({ field, setFieldValue, error = null }) {
  const [preview, setPreview] = useState(null);
  const fileUpload = useRef(null);

  const showFileUpload = () => fileUpload.current?.click();

  const handleChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file) return;

    const isValid =
      PROFILE_PICTURE_FORMATS.includes(file.type) &&
      file.size <= MAX_ATTACHMENT_SIZE;

    if (isValid) {
      reader.onload = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    }

    setFieldValue(field.name, file);
  };

  return (
    <div className="uk-flex uk-flex-column">
      <div className="uk-margin-small-bottom">
        {preview && (
          <img
            alt="project media"
            src={preview}
            style={{
              maxHeight: "12em",
            }}
          />
        )}
      </div>

      <div className="uk-flex uk-flex-middle">
        <div>
          <input type="file" onChange={handleChange} ref={fileUpload} hidden />
          <Button
            className="uk-button uk-button-primary"
            icon="image"
            onClick={showFileUpload}
          >
            Upload
          </Button>
        </div>
        <span
          className="uk-display-block uk-margin-small-left"
          style={{
            color: "var(--color-light-shade)",
          }}
        >
          <i>Recommended 720x720</i>
        </span>
      </div>

      {error && <InputFeedback message={error} />}
    </div>
  );
}
