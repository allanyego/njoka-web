import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="uk-flex uk-flex-middle uk-flex-center uk-height-1-1">
      <div>
        <h1 className="uk-heading-small">Hey, I&apos;m Collins...</h1>
        <p className="uk-text-large">
          ... I can help you build your next website.
        </p>
        <Link to="/contact" className="uk-button uk-button-primary">
          Contact me
        </Link>
        <p>Or, have a look around 🙂.</p>
      </div>
    </div>
  );
}
