import { Link } from "react-router-dom";

function Main() {
  // to be deleted
  localStorage.setItem(
    "order",
    JSON.stringify([
      { name: "Mowintime", amount: 1 },
      { name: "Row 26", amount: 2 },
    ])
  );
  // to be deleted end

  return (
    <div>
      <h1>Hello</h1>
      <Link to="/creditcard">credit card</Link>
      <br />
      <Link to="/mobilepay">mobile pay</Link>
    </div>
  );
}

export default Main;
