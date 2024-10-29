import { Card } from "../../common/card/Card";
import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <>
      <h2>Listado de productos</h2>
      <div className="itemList">
        {items.map(({ id, title, price, stock, imageUrl }) => (
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={imageUrl}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
