import "../sass/layout/_confirmation.scss";
import Header from "./Header";

function Confirmation() {
  const response = JSON.parse(localStorage.getItem("response"));
  const order = JSON.parse(localStorage.getItem("order"));
  const beerItems = order.map((beer) => {
    return <span>{`${beer.amount}x   ${beer.name}`}</span>;
  });

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
            <h2>{`order #${response.id}`}</h2>
            <div className="beers">{beerItems}</div>
          </div>
        </article>
        <div className="picture">
          <img src="images/thankyou-drawing.svg" alt="thank you drawing" />
        </div>
      </main>
    </section>
  );
}

export default Confirmation;
