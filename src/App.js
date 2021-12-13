import { Link } from "react-router-dom";

function App() {
  // to be deleted
  localStorage.setItem(
    "order",
    JSON.stringify([
      { name: "Mowintime", amount: 1 },
      { name: "GitHop", amount: 2 },
    ])
  );
  // to be deleted end
  return (
    <div className="App">
      <h1>Hello</h1>
      <Link to="/creditcard">credit card</Link>
      <br />
      <Link to="/mobilepay">mobile pay</Link>
    </div>
  );
}

export default App;
