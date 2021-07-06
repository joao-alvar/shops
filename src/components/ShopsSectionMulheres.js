import React from 'react';
import shopsMulheres from '../images/shopsMulheres.jpg';

const ShopsSectionMulheres = props => {
    return (
        <div className="ShopsContainer" style={{
            backgroundImage: `url(${shopsMulheres}`
        }}>
            <div className="Shops__page__container content__md">
            <span className="shops__glass"></span>
            </div>
        </div>
    );
};

export default ShopsSectionMulheres;
