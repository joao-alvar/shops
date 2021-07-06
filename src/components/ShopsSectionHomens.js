import React from 'react';
import shopsHomens from '../images/shopsHomens.jpg';

const ShopsSectionHomens = props => {
    return (
        <div className="ShopsContainer" style={{
            backgroundImage: `url(${shopsHomens}`
        }}>
            <div className="Shops__page__container content__md">
            <span className="shops__glass"></span>
            </div>
        </div>
    );
};

export default ShopsSectionHomens;
