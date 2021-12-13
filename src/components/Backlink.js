import "../sass/layout/_backlink.scss";
import { Link } from "react-router-dom";

function Backlink() {
  return (
    <div className="Backlink">
      <Link className="link" to="/">
        <img src="icons/arrow-back.svg" alt="chevron left" />
        Back to the menu
      </Link>
    </div>
  );
}

export default Backlink;
