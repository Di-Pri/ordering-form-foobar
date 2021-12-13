import { useState } from "react";
import { Link } from "react-router-dom";

export default function PaymentMethod() {
  const [chosen, setChosen] = useState("");
  const [creditCardClass, setCreditCardClass] = useState("methods");
  const [mobilePayClass, setMobilePayClass] = useState("methods");
  const [errorMessage, setErrorMessage] = useState("");

  function chosenMethod(method) {
    console.log("Chosen payment method is:", method);
    setChosen(method);
    setErrorMessage("");
    if (method === "/creditcard") {
      setCreditCardClass("methods chosenMethod");
      setMobilePayClass("methods");
    }
    if (method === "/mobilepay") {
      setMobilePayClass("methods chosenMethod");
      setCreditCardClass("methods");
    }
  }

  function pay() {
    if (chosen === "") {
      setErrorMessage("You need to choose a payment method");
    }
  }

  return (
    <article className="PaymentMethod">
      <p>Please choose a payment method</p>
      <section>
        <button className={creditCardClass} onClick={(e) => chosenMethod("/creditcard")}>
          <img src="icons/creditcard-logo.svg" alt="Credit card icon" />
        </button>
        <button className={mobilePayClass} onClick={(e) => chosenMethod("/mobilepay")}>
          <img src="icons/mobilepay-logo.svg" alt="Mobile pay icon" />
        </button>
      </section>
      <p>{errorMessage}</p>

      <nav>
        <Link to={chosen}>
          <button className="pay" onClick={pay}>
            Pay
          </button>
        </Link>
      </nav>
    </article>
  );
}
