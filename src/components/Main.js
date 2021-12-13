import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import TotalPrice from "./TotalPrice";
import PaymentMethod from "./PaymentMethod";

function Main() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

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
      const newProducts = oldProducts.filter((beer) =>
        beersOnTap.includes(beer.name)
      );
      console.log("newProducts:", newProducts);
      return newProducts;
    });
  }

  // function addToTotalPrice(product) {
  //   setTotalPrice((oldTotalPrice) => {
  //     const newTotalPrice = oldTotalPrice.concat(product);
  //     return newTotalPrice;
  //   });
  // }
  function addToTotalPrice() {
    setTotalPrice((oldTotalPrice) => {
      return oldTotalPrice + 1;
    });
  }

  function removeFromTotalPrice() {
    setTotalPrice((oldTotalPrice) => {
      return oldTotalPrice - 1;
    });
  }

  function addToBasket(product) {
    setCartItems((oldCartItems) => {
      const newCartItems = oldCartItems.concat(product);
      return newCartItems;
    });
  }

  // function addToBasket(product) {
  //   setCartItems([...cartItems, { ...product }]);
  // }

  function removeFromBasket(productToRemove) {
    const indexOfFirstUnwantedItem = cartItems.findIndex(
      (item) => item.name === productToRemove.name
    );
    console.log("unwatned inx", indexOfFirstUnwantedItem);
    if (indexOfFirstUnwantedItem !== -1) {
      const firstPart = cartItems.slice(0, indexOfFirstUnwantedItem);
      const lastPart = cartItems.slice(
        indexOfFirstUnwantedItem + 1,
        cartItems.length
      );

      //create an array one before the item you want to remove, and one after the item you want to remove, so the new list doesn't include the item you want t oremove

      setCartItems([...firstPart, ...lastPart]);
    }
  }

  console.log("cartItems", cartItems);

  return (
    <div className="Main">
      <img className="mainLogo" src="icons/foobar-logo.svg" alt="Foobar logo" />
      <ProductList
        products={products}
        addToTotalPrice={addToTotalPrice}
        removeFromTotalPrice={removeFromTotalPrice}
        addToBasket={addToBasket}
        removeFromBasket={removeFromBasket}
      />
      <TotalPrice totalPrice={totalPrice} />
      <PaymentMethod />
    </div>
  );
}

export default Main;
