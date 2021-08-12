import React from "react";
import shopsMulheres from "../images/shopsMulheres.jpg";
import productWomen5 from "../images/productWomen5.jpg";
import productWomen6 from "../images/productWomen6.jpg";
import FeaturedCollection from "../components/featured-collection/featured-collection";

const ShopsSectionMulheres = (props) => {
  return (
    <>
      <div
        className="ShopsContainer"
        style={{
          backgroundImage: `url(${shopsMulheres}`,
        }}
      >
        <div className="Shops__page__container content__md">
          <span className="shops__glass">
            <div className="shops__banner banner__md__section">
              <h3 className="banner__content">Marcas e tendências</h3>
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
        <FeaturedCollection />
      </section>
      <section className="products__show__section">
        <div className="products__show__container">
          <ul className="product__show__ul">
            <li className="product__show__list">
              <div className="product__list__show__wrap">
                <div className="product__show__img">
                  <img
                    src={productWomen5}
                    alt=""
                    className="product__list__img"
                  ></img>
                </div>
                <div className="product__list__title">
                  <h2 className="product__list__h2">Novos conjuntos</h2>
                  <p className="product__list__p">Sua cara-metade</p>
                  <a href="#products" className="product__show__btn">
                    <div className="product__show__btn">
                      <span className="product__show__btn__span">
                        compre agora
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li className="product__show__list">
              <div className="product__list__show__wrap">
                <div className="product__show__img">
                  <img
                    src={productWomen6}
                    alt=""
                    className="product__list__img"
                  ></img>
                </div>
                <div className="product__list__title">
                  <h2 className="product__list__h2">Novos conjuntos</h2>
                  <p className="product__list__p">Sua cara-metade</p>
                  <a href="#products" className="product__show__btn">
                    <div className="product__show__btn">
                      <span className="product__show__btn__span">
                        compre agora
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ShopsSectionMulheres;
