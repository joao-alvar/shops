import React from 'react';
import shopsHomens from '../images/shopsHomens.jpg';
import productMen from '../images/productMen.jpg';
import productMen2 from '../images/productMen2.jpg';
import productMen3 from '../images/productMen3.jpg';
import productMen4 from '../images/productMen4.jpg';
import { Link } from "react-router-dom";

const ShopsSectionHomens = props => {
    return (
        <>
        <div className="ShopsContainer" style={{
            backgroundImage: `url(${shopsHomens}`
        }}>
            <div className="Shops__page__container content__md">
            <span className="shops__glass">
            <div  className="shops__banner banner__content__section"><h3 className="banner__content">Busque o seu estilo</h3></div>
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
                            <img src={productMen} alt="" className="product__list__img"></img>
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
                            <img src={productMen2} alt="" className="product__list__img"></img>
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
                            <img src={productMen3} alt="" className="product__list__img img__product__3"></img>
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
                            <img src={productMen4} alt="" className="product__list__img"></img>
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

export default ShopsSectionHomens;
