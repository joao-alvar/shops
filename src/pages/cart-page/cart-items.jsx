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
    <div className="cart__list__items">
      <div className="cart__items__img__wrap">
        <img src={imageURL} alt={title} className="cart__items__img" />
      </div>
      <div className="cart__content">
        <h2>{title}</h2>
        <p className="cart__price">R$ {price}</p>
        <div className="quantidade">
          <p className="cart__quant">{`Quantidade: ${quantity}`}</p>
        </div>
      </div>
      <div className="cart__btn__wrap">
        <button
          onClick={() => increase(product)}
          className="btn__cart btn__checkout"
        >
          <AddCircleOutlineIcon style={{ fontSize: 20 }} />
        </button>
        {quantity === 1 && (
          <button
            onClick={() => removeProduct(product)}
            className="btn__cart btn__delete"
          >
            <DeleteForeverIcon style={{ fontSize: 20 }} />
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => decrease(product)}
            className="btn__cart btn__remove"
          >
            <RemoveCircleOutlineIcon style={{ fontSize: 20 }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItems;
