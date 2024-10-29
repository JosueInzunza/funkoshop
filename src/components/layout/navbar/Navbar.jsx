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
            src="https://res.cloudinary.com/duntko49r/image/upload/v1730242815/funkoshop-logo_txgvim.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Link>
        <ul className={"category"}>
          <Link to="/category/anime" className={"link"}>
            Anime
          </Link>
          <Link to="/category/marvel" className={"link"}>
            Marvel
          </Link>
          <Link to="/category/disney" className={"link"}>
            Disney
          </Link>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
