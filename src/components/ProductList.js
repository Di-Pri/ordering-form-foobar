import Product from "./Product";

export default function ProductList(props) {
  // Creating an array with Product components based on data in props
  const list = props.products.map((product) => (
    <Product
      addToTotalPrice={props.addToTotalPrice}
      removeFromTotalPrice={props.removeFromTotalPrice}
      addToBasket={props.addToBasket}
      removeFromBasket={props.removeFromBasket}
      // id={Math.floor(Math.random() * 100)}
      key={product.name}
      {...product}
    />
  ));
  return <section className="ProductList">{list}</section>;
}
