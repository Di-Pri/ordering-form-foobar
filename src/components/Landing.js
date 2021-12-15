import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="Landing">
      <img className="mainLogo" src="icons/foobar-logo.svg" alt="Foobar logo" />
      <div className="lure">
        <h1>
          Locally <br /> brewed <span>beer</span>
        </h1>
        <picture>
          <source type="image/webp" srcSet="images/beers-webp/elhefe.webp" />
          <source type="image/png" srcSet="images/beers-png/elhefe.png" />
          <img src="images/beers-png/elhefe.png" alt="Glass of beer" />
        </picture>
      </div>
      <nav>
        <Link className="order-now" to="/beers">
          Order now
        </Link>
      </nav>
    </div>
  );
}
