import React from 'react';
import { Link } from 'react-router-dom';

const Directory = props => {
    return (
        <div className="HomeContainer">
            <div className="home__page__container content__md">
            <div className="content__wrap">
            <div className="text__content">
            <h2>Isto é Shops.</h2>
            <p>SHOPS. DESIGN e 150+ marcas</p>
            </div>
            <div className="home__button">
            <Link to="/shopsmulheres"><span>Shops. Mulheres</span></Link>
            <Link to="/shopshomens"><span>Shops. Homens</span></Link>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Directory;
