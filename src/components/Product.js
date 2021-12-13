import { useState } from "react";
import Popup from "./Popup";

export default function Product(props) {
  const [amount, setAmount] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);

  // Toggling pop up window
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  // Setting path to images with the glasses
  const beerImage = `images/${props.label}`;
  const beerImageAlt = `Glass with ${props.name} label`;

  function plus() {
    // Incrementing the number of beers selected
    setAmount((oldAmount) => {
      if (oldAmount === 99) {
        return 99;
      }
      return oldAmount + 1;
    });
    // Adding beers to cart
    if (amount < 99) {
      props.addBeersToTotalPrice();
      props.addToCart({
        name: props.name,
      });
    }
  }

  // Decrementing the number of beers selected
  function minus() {
    setAmount((oldAmount) => {
      if (oldAmount > 0) {
        return oldAmount - 1;
      }
      return 0;
    });
    // Removing beers from cart
    if (amount > 0) {
      props.removeBeersFromTotalPrice();
      props.removeFromCart({
        name: props.name,
      });
    }
  }

  return (
    <article className="Product">
      <section>
        <img src={beerImage} alt={beerImageAlt} />
        <h2>{props.name}</h2>
        <h3>80 kr</h3>
        <button className="about" onClick={togglePopup}>
          About
        </button>
        {popupOpen && (
          <Popup
            togglePopup={togglePopup}
            name={props.name}
            description={props.description.overallImpression}
            alcohol={props.alc}
            category={props.category}
            label={props.label}
            beerImage={beerImage}
            beerImageAlt={beerImageAlt}
          />
        )}
      </section>
      <section className="plusMinus">
        <button onClick={plus}></button>
        <p>{amount}</p>
        <button onClick={minus}></button>
      </section>
    </article>
  );
}
