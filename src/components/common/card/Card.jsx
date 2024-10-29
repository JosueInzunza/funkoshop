import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div className={"card"}>
      <img src={image} alt="" style={{ width: "100px" }} />
      <h2>Titulo: {title}</h2>
      <h3>Precio: {price}</h3>
      <h3>Stock: {stock}</h3>
      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};
