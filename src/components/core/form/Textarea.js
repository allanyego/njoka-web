import InputFeedback from "./InputFeedback";

export default function Textarea({ error, ...props }) {
  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id || props.name;

  return (
    <>
      <textarea
        className="uk-textarea"
        {...{
          ...props,
          id,
        }}
      />
      {error && <InputFeedback message={error} />}
    </>
  );
}
