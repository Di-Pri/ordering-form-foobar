import "../sass/layout/_mobilepay.scss";
import Header from "./Header";
import Backlink from "./Backlink";

function Mobilepay() {
  return (
    <section className="Mobilepay">
      <Header />
      <main>
        <Backlink />
        <h1>payment</h1>
        <div className="picture">
          <img src="images/qr-code.png" />
        </div>
      </main>
    </section>
  );
}

export default Mobilepay;
