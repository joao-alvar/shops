import React from "react";
import shopsHomens from "../images/shopsHomens.jpg";
import productMen5 from "../images/productMen5.jpg";
import productMen6 from "../images/productMen6.jpg";
import { Link } from "react-router-dom";
import FeaturedCollectionMen from "./featured-collection/featured-products-men";

const ShopsSectionHomens = (props) => {
  return (
    <>
      <div
        className="ShopsContainer"
        style={{
          backgroundImage: `url(${shopsHomens}`,
        }}
      >
        <div className="Shops__page__container content__md">
          <span className="shops__glass">
            <div className="shops__banner banner__content__section">
              <h3 className="banner__content">Busque o seu estilo</h3>
            </div>
            <div className="shops__banner__btn">
              <a href="#products" className="banner__link">
                <h3 className="banner__btn">compre agora</h3>
              </a>
            </div>
          </span>
        </div>
      </div>
      <section id="products">
        <FeaturedCollectionMen />
      </section>
      <section className="products__show__section">
        <div className="products__show__container">
          <ul className="product__show__ul">
            <li className="product__show__list">
              <Link to="" className="product__list__link">
                <div className="product__list__show__wrap">
                  <div className="product__show__img">
                    <img
                      src={productMen5}
                      alt=""
                      className="product__list__img"
                    ></img>
                  </div>
                  <div className="product__list__title">
                    <h2 className="product__list__h2">Novos conjuntos</h2>
                    <p className="product__list__p">Sua cara-metade</p>
                    <div className="product__show__btn">
                      <span className="product__show__btn__span">
                        compre agora
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="product__show__list">
              <Link to="" className="product__list__link">
                <div className="product__list__show__wrap">
                  <div className="product__show__img">
                    <img
                      src={productMen6}
                      alt=""
                      className="product__list__img"
                    ></img>
                  </div>
                  <div className="product__list__title">
                    <h2 className="product__list__h2">Novos conjuntos</h2>
                    <p className="product__list__p">Sua cara-metade</p>
                    <div className="product__show__btn">
                      <span className="product__show__btn__span">
                        compre agora
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ShopsSectionHomens;
