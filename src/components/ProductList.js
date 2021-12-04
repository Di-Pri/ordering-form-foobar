import Product from "./Product";

export default function ProductList(props) {
  return (
    <section className="ProductList">
      <Product {...props.product} />
      <Product {...props.product} />
      <Product {...props.product} />
      <Product {...props.product} />
    </section>
  );
}
