import React from "react";
import { withRouter } from "react-router-dom";

const Total = ({ itemCount, total, history, clearCart }) => {
  return (
    <div>
      <div>
        <div>
          <p>Itens: {itemCount}</p>
          <p>{`Total a pagar: R$ ${total}`}</p>
        </div>
        <div>
          <button onClick={() => history.push("/checkout")}>Checkout</button>
          <button onClick={() => clearCart()}>Limpar lista</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Total);
