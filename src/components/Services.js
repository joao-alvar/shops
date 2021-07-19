import React from 'react';
import { Link } from 'react-router-dom';

const Services = props => {
    return (
        <div className="service__wrap">
              <div className="home__bottom__wrap">
                <div className="home__bottom__links"><h2><Link to="/">facil entrega para qualquer lugar</Link></h2></div>
                <div className="home__bottom__content"><h2>descubra mais de 150 marcas</h2></div>
                </div>
        </div>
    )
}

export default Services;
