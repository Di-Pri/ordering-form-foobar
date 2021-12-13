import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="Landing">
      <img className="mainLogo" src="icons/foobar-logo.svg" alt="Foobar logo" />
      <div className="lure">
        <h1>
          Locally <br /> brewed <span>beer</span>
        </h1>
        <img src="images/beer-landing.png" alt="Beer glass" />
      </div>
      <nav>
        <Link className="order-now" to="/beers">
          Order now
        </Link>
      </nav>
    </div>
  );
}