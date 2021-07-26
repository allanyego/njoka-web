import "./Page.css";

export default function Page({ heading, className, children }) {
  return (
    <section className={`uk-padding ${className}`}>
      <h1 className="uk-heading-bullet uk-heading-small">{heading}</h1>
      <div>{children}</div>
    </section>
  );
}
