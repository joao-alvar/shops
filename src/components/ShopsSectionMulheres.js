import React from 'react';
import shopsMulheres from '../images/shopsMulheres.jpg';

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

        </section>
        </>
    );
};

export default ShopsSectionMulheres;
