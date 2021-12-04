export default function Product(props) {
  console.log(props);
  const beerImage = `images/${props.label}`;
  const beerImageAlt = `Glass with ${props.name} label`;
  return (
    <article>
      <img src={beerImage} alt={beerImageAlt} />
      <h2>{props.name}</h2>
      <p>80 kr</p>
      <button>About</button>
    </article>
  );
}
