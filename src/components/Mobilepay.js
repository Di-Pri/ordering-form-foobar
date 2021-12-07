import "../sass/layout/_mobilepay.scss";
import Header from "./Header";
import Backlink from "./Backlink";
import { postOrder } from "./../utilities/post.js";

function Mobilepay() {
  const handleClick = async (e) => {
    await postOrder();
  };

  return (
    <section className="Mobilepay">
      <Header />
      <main>
        <Backlink />
        <h1>payment</h1>
        <div className="picture">
          <img src="images/qr-code.png" alt="qr code" onClick={handleClick} />
        </div>
      </main>
    </section>
  );
}

export default Mobilepay;
