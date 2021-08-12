import React from "react";
import { withRouter } from "react-router-dom";

const FeaturedProduct = (props) => {
  const { title, imageURL, price, history, id } = props;

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
          <button className="btn__minha__lista">
            <span>minha lista</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default withRouter(FeaturedProduct);
