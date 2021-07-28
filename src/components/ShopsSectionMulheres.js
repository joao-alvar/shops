import React from 'react';
import shopsMulheres from '../images/shopsMulheres.jpg';
import productWomen from '../images/productWomen.jpg';
import productWomen2 from '../images/productWomen2.jpg';
import productWomen1 from '../images/productWomen1.jpg';
import productWomen4 from '../images/productWomen4.jpg';
import { Link } from "react-router-dom";

const ShopsSectionMulheres = props => {
    return (
        <>
        <div className="ShopsContainer" style={{
            backgroundImage: `url(${shopsMulheres}`
        }}>
            <div className="Shops__page__container content__md">
            <span className="shops__glass">
            <div  className="shops__banner banner__md__section"><h3 className="banner__content">Marcas e tendências</h3></div>
            <div  className="shops__banner__btn"><a href="#products" className="banner__link"><h3 className="banner__btn">compre agora</h3></a></div>
            </span>
            </div>
        </div>
        <section id="products">
            <div className="products__container">
            <ul className="product__list__ul">
                <li className="product__list">
                    <Link to="" className="product__list__link">
                    <div className="product__list__container">
                        <div className="product__list__wrap">
                            <img src={productWomen} alt="" className="product__list__img"></img>
                        </div>
                        <div className="product__list__title">
                            <h2 className="product__list__h2">Novos conjuntos</h2>
                            <p className="product__list__p">Sua cara-metade</p>
                            </div>
                    </div>
                    </Link>
                </li>
                <li className="product__list">
                    <Link to="" className="product__list__link">
                    <div className="product__list__container">
                        <div className="product__list__wrap">
                            <img src={productWomen2} alt="" className="product__list__img"></img>
                        </div>
                        <div className="product__list__title">
                            <h2 className="product__list__h2">Novos conjuntos</h2>
                            <p className="product__list__p">Sua cara-metade</p>
                            </div>
                    </div>
                    </Link>
                </li>
                <li className="product__list">
                    <Link to="" className="product__list__link">
                    <div className="product__list__container">
                        <div className="product__list__wrap">
                            <img src={productWomen1} alt="" className="product__list__img img__product__3"></img>
                        </div>
                        <div className="product__list__title">
                            <h2 className="product__list__h2">Novos conjuntos</h2>
                            <p className="product__list__p">Sua cara-metade</p>
                            </div>
                    </div>
                    </Link>
                </li>
                 <li className="product__list">
                    <Link to="" className="product__list__link">
                    <div className="product__list__container">
                        <div className="product__list__wrap">
                            <img src={productWomen4} alt="" className="product__list__img"></img>
                        </div>
                        <div className="product__list__title">
                            <h2 className="product__list__h2">Novos conjuntos</h2>
                            <p className="product__list__p">Sua cara-metade</p>
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

export default ShopsSectionMulheres;
