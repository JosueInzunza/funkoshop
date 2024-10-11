import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <h2>Funkoshop</h2>

        <ul>
          <li>Disney</li>
          <li>Anime</li>
          <li>Marvel</li>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
