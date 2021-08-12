import React, { useContext } from "react";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { CartContext } from "../../context/cart-context";

const CartIcon = () => {
  const { itemCount } = useContext(CartContext);
  return (
    <div className="bag__wrap">
      <LocalMallOutlinedIcon style={{ fontSize: 27, cursor: "pointer" }} />
      {itemCount > 0 ? (
        <span className="cart__list__num">{itemCount}</span>
      ) : null}
    </div>
  );
};

export default CartIcon;
