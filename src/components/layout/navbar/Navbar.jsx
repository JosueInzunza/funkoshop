import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode }) => {
  return (
    <>
      <div
        className={
          darkMode ? "container-navbar-dark navbar" : "container-navbar navbar"
        }
      >
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1727995204/images_hthelg.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Link>
        <ul style={{ display: "flex", gap: "10px" }}>
          <Link to="/category/anime">Anime</Link>
          <Link to="/category/marvel">Marvel</Link>
          <Link to="/category/disney">Disney</Link>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
