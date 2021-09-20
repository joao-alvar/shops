import React from "react";
import { withRouter } from "react-router-dom";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const Total = ({ itemCount, total, history, clearCart }) => {
  return (
    <div className="total">
      <div className="total__container">
        <div className="total__title">
          <h2>total</h2>
        </div>
        <div className="total__wrap">
          <div className="total__itens">
            <span className="total__itens__title">
              <p>Itens: </p>
            </span>
            <span className="total__itens__count">{itemCount}</span>
          </div>
          <div className="total__itens__pay">
            <span>Total a pagar:</span>
            <span>
              <p>R$ {total.toFixed(2)}</p>
            </span>
          </div>
          <div className="total__itens__entrega">
            <div className="itens__entrega">
              <span>opções de entrega:</span>
              <span>
                <ErrorOutlineIcon />
              </span>
            </div>
            <div className="itens__entrega__form">
              <form>
                <select name="select" className="itens__entrega__select">
                  <option value="valor1">Express Delivery</option>
                  <option value="valor2" selected>
                    Entrega Normal
                  </option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="total__itens__btn">
          <button className="total__btn btn__clear" onClick={() => clearCart()}>
            Limpar lista
          </button>
          <button
            className="total__btn btn__checkout"
            onClick={() => history.push("/checkout")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Total);
