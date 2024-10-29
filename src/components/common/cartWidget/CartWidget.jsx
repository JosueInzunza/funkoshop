import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <Link to="/cart" className="link">
      <MdShoppingCart className="linkIcon" />
      <span>0</span>
    </Link>
  );
};
