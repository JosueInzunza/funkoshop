import "./itemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className={"itemDetail"}>
      <h1>{item.description}</h1>
      <img src={item.imageUrl} alt="" />
      <h2>Titulo: {item.title}</h2>
      <h3>Precio: {item.price}</h3>
      <h3>Stock: {item.stock}</h3>
    </div>
  );
};

export default ItemDetail;
