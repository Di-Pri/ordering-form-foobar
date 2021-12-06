import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import TotalPrice from "./TotalPrice";

function Main() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  // Fetching data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://winter-foobar.herokuapp.com/");
      const data = await res.json();
      console.log(data);
    }
    async function fetchBeerTypes() {
      const res = await fetch("https://winter-foobar.herokuapp.com/beertypes");
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
    fetchBeerTypes();
  }, []);

  function addToTotalPrice(product) {
    setTotalPrice((oldTotalPrice) => {
      const newTotalPrice = oldTotalPrice.concat(product);
      return newTotalPrice;
    });
  }

  return (
    <div className="Main">
      <img className="mainLogo" src="icons/foobar-logo.svg" alt="Foobar logo" />
      <ProductList products={products} addToTotalPrice={addToTotalPrice} />
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
}

export default Main;
