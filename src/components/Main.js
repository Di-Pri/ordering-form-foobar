import ProductList from "./ProductList";
import TotalPrice from "./TotalPrice";

function Main() {
  const products = [
    {
      id: 0,
      name: "El Hefe",
      label: "elhefe.png",
    },
    {
      id: 1,
      name: "Fairy Tale Ale",
      label: "fairytaleale.png",
    },
    {
      id: 2,
      name: "GitHop",
      label: "githop.png",
    },
    {
      id: 3,
      name: "Hollaback Lager",
      label: "hollaback.png",
    },
    {
      id: 4,
      name: "Hoppily Ever After",
      label: "hoppilyeverafter.png",
    },
  ];
  return (
    <div className="Main">
      <img className="mainLogo" src="icons/foobar-logo.svg" alt="Foobar logo" />
      <ProductList products={products} />
      <TotalPrice />
    </div>
  );
}

export default Main;
