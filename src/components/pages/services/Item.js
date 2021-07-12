export default function Item({ title, services }) {
  return (
    <div className="uk-width-1-4">
      <h3 className="uk-card-title uk-heading-divider uk-text-uppercase">
        {title}
      </h3>
      {services.map((service, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="uk-flex">
          <span className="uk-display-block uk-margin-right">-</span>
          <span className="uk-display-block uk-text-capitalize">{service}</span>
        </div>
      ))}
    </div>
  );
}
