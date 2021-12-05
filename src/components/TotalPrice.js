export default function TotalPrice(props) {
  // Calculating total price
  const initialValue = 0;
  let sum = props.totalPrice.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);

  return (
    <div>
      <h3>
        Total: <span>{sum}</span> kr
      </h3>
    </div>
  );
}
