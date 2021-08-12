import React from 'react';
import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const NotFound = () => {
    return (
        <div className="not__found__wrap">
            <div className="not__found__content">
            <SentimentVeryDissatisfiedIcon style={{ fontSize: 189, color: "#999" }}/>
            <div className="not__found__404"><h1>404</h1></div>
            <h3 className="not__found__h3">Página não encontrada</h3>
            <p className="not__found__p">a página que você procura não existe ou ocorreu um erro,
            <br/>
            volte para a página que você estava ou acesse <Link className="not__found__404__link" to="/">shops.com</Link> para escolher uma nova direção.
            </p>
            </div>
        </div>
    )
}

export default NotFound;