import { useState } from "react";
import Popup from "./Popup";

export default function Product(props) {
  const [amount, setAmount] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  // Setting path to images with the glasses
  const beerImage = `images/${props.label}`;
  const beerImageAlt = `Glass with ${props.name} label`;

  // Incrementing the number of beers selected
  function plus() {
    setAmount((oldAmount) => {
      if (oldAmount === 99) {
        return 99;
      }
      return oldAmount + 1;
    });
    // Adding products to basket (to total price)
    if (amount < 99) {
      props.addToTotalPrice({
        price: 80,
        name: props.name,
        id: props.id,
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
            desc={props.description.overallImpression}
            alcohol={props.alc}
            category={props.category}
            label={props.label}
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
