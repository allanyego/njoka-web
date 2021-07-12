export default function Card({ title, body, image }) {
  return (
    <div className="uk-width-1-3 uk-card uk-card-hover uk-card-body">
      <div className="uk-flex uk-flex-middle">
        <img src={image} alt="service media" />
      </div>
      <h3 className="uk-card-title uk-text-center uk-text-uppercase">
        {title}
      </h3>
      <p>{body}</p>
    </div>
  );
}
