export default function PaymentMethod() {
  return (
    <article className="PaymentMethod">
      <p>Please choose a payment method</p>
      <section>
        <div>
          <img src="icons/creditcard-logo.svg" alt="Credit card icon" />
        </div>
        <div>
          <img src="icons/mobilepay-logo.svg" alt="Mobile pay icon" />
        </div>
      </section>
      <button className="pay">Pay</button>
    </article>
  );
}
