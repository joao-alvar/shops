import React from 'react'

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
            <a href="#"><span>Shops. Mulheres</span></a>
            <a href="#"><span>Shops. Homens</span></a>
            </div>
            </div>
                <div className="home__bottom__wrap">
                <div className="home__bottom__links"><h2><a href="#">facil entrega para qualquer lugar</a></h2></div>
                <div className="home__bottom__content"><h2>descubra mais de 150 marcas</h2></div>
                </div>
            </div>
        </div>
    );
};

export default Directory;
