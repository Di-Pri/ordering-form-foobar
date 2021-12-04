import "../sass/layout/_creditcard.scss";
import Header from "./Header";
import Backlink from "./Backlink";

function Creditcard() {
  return (
    <section className="creditcard_wrapper">
      <Header />
      <main className="creditcard">
        <Backlink />
        <h1>payment</h1>
        <form></form>
      </main>
    </section>
  );
}

export default Creditcard;
