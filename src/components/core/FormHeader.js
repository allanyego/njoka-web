export default function FormHeader({ value }) {
  return (
    <h1
      className="uk-text-center"
      style={{
        color: "var(--color-light)",
        fontSize: "1.5rem",
      }}
    >
      {value}
    </h1>
  );
}
