import "../sass/layout/_confirmation.scss";
import Header from "./Header";

function Confirmation() {
  return (
    <section className="Confirmation">
      <Header />
      <main>
        <div className="message">
          <h1>Thank you!</h1>
          <p>
            Your order has now been received by our staff and it will arrive
            shortly.
          </p>
        </div>
        <article id="order">
          <div className="wrapper">
            <h2>order #123</h2>
            <div className="beers">
              <span>El Hefe</span>
              <span>Sleighride</span>
              <span>Ruined childhood</span>
            </div>
          </div>
        </article>
        <div className="picture">
          <img src="images/thankyou-drawing.svg" />
        </div>
      </main>
    </section>
  );
}

export default Confirmation;
