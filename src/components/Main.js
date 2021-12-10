import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import TotalPrice from "./TotalPrice";
import PaymentMethod from "./PaymentMethod";

function Main() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  // Fetching data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://winter-foobar.herokuapp.com/");
      const data = await res.json();
      checkTaps(data);
    }
    async function fetchBeerTypes() {
      const res = await fetch("https://winter-foobar.herokuapp.com/beertypes");
      const data = await res.json();
      setProducts(data);
      fetchData();
    }
    fetchBeerTypes();
  }, []);

  // Checking beers in taps and updating displayed products to those that are currently available
  function checkTaps(data) {
    setProducts((oldProducts) => {
      const beersOnTap = data.taps.map((tap) => tap.beer);
      console.log("beersOnTap:", beersOnTap);
      const newProducts = oldProducts.filter((beer) => beersOnTap.includes(beer.name));
      console.log("newProducts:", newProducts);
      return newProducts;
    });
  }

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
      <PaymentMethod />
    </div>
  );
}

export default Main;
