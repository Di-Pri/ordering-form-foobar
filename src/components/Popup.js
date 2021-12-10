export default function Popup(props) {
  const beerImage = `images/${props.label}`;
  const beerImageAlt = `Glass with ${props.name} label`;
  return (
    <article className="Popup">
      <div className="closeModal">
        <button onClick={props.togglePopup}></button>
      </div>
      <div className="popUpInfo">
        <section>
          <h2>{props.name}</h2>
          <div>
            <p>Category: {props.category}</p>
            <p>Alcohol: {props.alcohol}%</p>
          </div>
          <p>{props.desc}</p>
        </section>
        <section>
          <img src={beerImage} alt={beerImageAlt} />
        </section>
      </div>
    </article>
  );
}
