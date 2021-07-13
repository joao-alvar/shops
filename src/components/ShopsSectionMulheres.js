import React from 'react';
import { Link } from 'react-router-dom';
import shopsMulheres from '../images/shopsMulheres.jpg';

const ShopsSectionMulheres = props => {
    return (
        <div className="ShopsContainer" style={{
            backgroundImage: `url(${shopsMulheres}`
        }}>
            <div className="Shops__page__container content__md">
            <span className="shops__glass">
            <div  className="shops__banner"><h3 className="banner__content">Os melhores estilos</h3></div>
            <div  className="shops__banner__btn"><Link className="banner__link"><h3 className="banner__btn">compre agora</h3></Link></div>
            </span>
            </div>
        </div>
    );
};

export default ShopsSectionMulheres;
