import { useState } from "react";

export default function PaymentMethod() {
  const [chosen, setChosen] = useState("");
  const [creditCardClass, setCreditCardClass] = useState("methods");
  const [mobilePayClass, setMobilePayClass] = useState("methods");

  function chosenMethod(method) {
    console.log("Chosen payment method is:", method);
    setChosen(method);
    if (method === "creditCard") {
      setCreditCardClass("methods chosenMethod");
      setMobilePayClass("methods");
    }
    if (method === "mobilePay") {
      setMobilePayClass("methods chosenMethod");
      setCreditCardClass("methods");
    }
  }

  return (
    <article className="PaymentMethod">
      <p>Please choose a payment method</p>
      <section>
        <button className={creditCardClass} onClick={(e) => chosenMethod("creditCard")}>
          <img src="icons/creditcard-logo.svg" alt="Credit card icon" />
        </button>
        <button className={mobilePayClass} onClick={(e) => chosenMethod("mobilePay")}>
          <img src="icons/mobilepay-logo.svg" alt="Mobile pay icon" />
        </button>
      </section>
      <p>{chosen}</p>
      <button className="pay">Pay</button>
    </article>
  );
}
