function Product(props) {
  console.log(props);
  const beerImage = `images/${props.label}`;
  const beerImageAlt = `Glass with ${props.name} label`;
  return (
    <article>
      <img src={beerImage} alt={beerImageAlt} />
      <h2>{props.name}</h2>
      <p>{props.price} kr</p>
      <button>About</button>
    </article>
  );
}

function ProductList(props) {
  return (
    <section className="ProductList">
      <Product {...props.product} />
    </section>
  );
}

function TotalPrice() {
  return (
    <div>
      <h3>
        Total: <span></span> kr
      </h3>
    </div>
  );
}

function Main() {
  const product = {
    name: "El Hefe",
    price: 80,
    label: "elhefe.png",
  };
  return (
    <div className="Main">
      <ProductList product={product} />
      <TotalPrice />
      {/* <section className="ProductList">
        <article>
          <img src="images/El-Hefe.png" alt="El Hefe beer glass" />
          <h2>El Hefe</h2>
          <p>80 kr</p>
          <button>About</button>
        </article>
        <article>
          <img src="images/Fairy-Tale-Ale.png" alt="Fairy Tale Ale beer glass" />
          <h2>Fairy Tale Ale</h2>
          <p>80 kr</p>
          <button>About</button>
        </article>
        <article>
          <img src="images/GitHop.png" alt="GitHop beer glass" />
          <h2>GitHop</h2>
          <p>80 kr</p>
          <button>About</button>
        </article>
        <article>
          <img src="images/Hollaback-Lager.png" alt="Hollaback Lager beer glass" />
          <h2>Hollaback Lager</h2>
          <p>80 kr</p>
          <button>About</button>
        </article>
      </section> */}
    </div>
  );
}

export default Main;
