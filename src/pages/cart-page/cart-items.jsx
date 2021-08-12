import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const CartItems = (props) => {
  const {
    title,
    imageURL,
    price,
    quantity,
    id,
    description,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, imageURL, price, quantity, id, description };
  return (
    <div>
      <div>
        <img src={imageURL} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>R$ {price}</p>
      </div>
      <div className="quantidade">
        <p>{`Quantidade: ${quantity}`}</p>
      </div>
      <div>
        <button onClick={() => increase(product)}>
          <AddCircleOutlineIcon style={{ fontSize: 20 }} />
        </button>
        {quantity === 1 && (
          <button onClick={() => removeProduct(product)}>
            <DeleteForeverIcon style={{ fontSize: 20 }} />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => decrease(product)}>
            <RemoveCircleOutlineIcon style={{ fontSize: 20 }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItems;
