import React from 'react';
import shopsHomens from '../images/shopsHomens.jpg';

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

        </section>
        </>
    );
};

export default ShopsSectionHomens;
