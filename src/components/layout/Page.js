export default function Page({ heading, children }) {
  return (
    <section className="uk-padding">
      <h1 className="uk-heading-bullet uk-heading-small">{heading}</h1>
      <div>{children}</div>
    </section>
  );
}
