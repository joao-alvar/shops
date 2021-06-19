import React from 'react';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const Nav = props => {
    return (
        <header>
        <div className="headerContainer">
           <div className="headerRoom">
           <div className="headerRoom__wrap">
           <ul className="headerRoom__ul">
           <li><a href="/">Marketplace</a></li>
           <li><a href="/" className="faq">Ajuda & FAQs</a></li>
           </ul>
           </div>
           </div>
            <nav>
            <div className="nav__main__links">
            <div className="logo"><h2><a><Link to="/">Shops.</Link></a></h2></div>
            <ul className="nav__primary__ul">
            <li className="li__shop__for__mulher"><h3><a className="a__shop__for__mulher" href="/">Mulher</a></h3></li>
            <li className="li__shop__for__homem"><h3><a className="a__shop__for__homem" href="/">Homem</a></h3></li>
            </ul>
            </div>
            <div className="nav__icons">
            <ul className="icon__list">
            <div className="tooltip__container">
            <li><PersonOutlineIcon  style={{ fontSize: 29, cursor: "pointer" }} /></li>
            <span class="tooltip__links">
                <ul>
                    <li><h3>minha conta</h3></li>
                    <li><a href="/" className="sign__in__btn">sign in</a></li>
                    <li><a href="/" className="register__btn">resgistre-se</a></li>
                </ul>
            </span></div>
            <li><LocalMallOutlinedIcon  style={{ fontSize: 27, cursor: "pointer"  }} /></li>
            </ul>
            </div>
            </nav>
           <div className="headerBanner">
           <div className="banner__shop__for__mulher"><a href="/">Mulher</a></div>
           <div className="banner__shop__text"><strong>
           PROMOÇÂO: AGORA GANHE ATÉ 80% DE DESCONTO!
           <br/>
          &nbsp;A PROMOÇÂO DO SHOPS. ficou Ainda MAIOR
           </strong>
           <span class="hover__text"><p>* Digite o código na finalização da compra no aplicativo para receber o desconto. 
           Vários pedidos por cliente até o gasto máximo de pré-desconto de R$ 199,99 / R$ 299,99. 
           Não pode ser usado com outros códigos promocionais ou em vouchers-presente, taxas de entrega, Premier Delivery ou Shops. Marketplace.
            Alguns Produtos marcados são excluídos da promoção.</p></span>
           </div>
           <div className="banner__shop__for__homem"><a href="/">Homem</a></div>
           </div>
           </div>
        </header>
    );
};

export default Nav;
