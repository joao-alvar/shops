import React, { useContext } from "react";
import { isInCart } from "../../helpers";
import { CartContext } from "../../context/cart-context";
import { withRouter } from "react-router-dom";

const FeaturedProduct = (props) => {
  const { title, imageURL, price, history, id, description } = props;
  const product = { title, imageURL, price, history, id, description };
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);

  return (
    <li className="product__list">
      <div className="product__list__container">
        <div className="product__list__wrap">
          <img
            src={imageURL}
            alt={title}
            className="product__list__img"
            onClick={() => history.push(`/product/${id}`)}
          ></img>
        </div>
        <div className="product__list__title">
          <p className="product__list__p">{title}</p>
          <span className="price__wrap">
            <p className="price__content">R$ {price}</p>
          </span>
          {!itemInCart && (
            <button
              className="btn__minha__lista"
              onClick={() => addProduct(product)}
            >
              <span>minha lista</span>
            </button>
          )}
          {itemInCart && (
            <button
              className="btn__minha__lista btn__add__mais"
              onClick={() => increase(product)}
            >
              {" "}
              <span>mais um?</span>
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default withRouter(FeaturedProduct);
