function Product() {
  return (
    <article>
      <img src="images/El-Hefe.png" alt="El Hefe beer glass" />
      <h2>El Hefe</h2>
      <p>80 kr</p>
      <button>About</button>
    </article>
  );
}

function ProductList() {
  return (
    <section className="ProductList">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
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
  return (
    <div className="Main">
      <ProductList />
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
