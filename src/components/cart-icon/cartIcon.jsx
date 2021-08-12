import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { CartContext } from "../../context/cart-context";

const CartIcon = ({ history }) => {
  const { itemCount } = useContext(CartContext);
  return (
    <div className="bag__wrap" onClick={() => history.push("/minhalista")}>
      <LocalMallOutlinedIcon style={{ fontSize: 27, cursor: "pointer" }} />
      {itemCount > 0 ? (
        <span className="cart__list__num">{itemCount}</span>
      ) : null}
    </div>
  );
};

export default withRouter(CartIcon);
