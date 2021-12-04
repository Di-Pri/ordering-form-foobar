import { useState } from "react";

export default function Product(props) {
  const [amount, setAmount] = useState(0);

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
    <article>
      <section>
        <img src={beerImage} alt={beerImageAlt} />
        <h2>{props.name}</h2>
        <p>80 kr</p>
        <button>About</button>
      </section>
      <section>
        <button onClick={plus}>+</button>
        <p>{amount}</p>
        <button onClick={minus}>-</button>
      </section>
    </article>
  );
}
