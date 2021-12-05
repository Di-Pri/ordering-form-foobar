import Product from "./Product";

export default function ProductList(props) {
  // Creating an array with Product components based on data in props
  const list = props.products.map((product) => <Product addToTotalPrice={props.addToTotalPrice} key={product.id} {...product} />);
  return <section className="ProductList">{list}</section>;
}
