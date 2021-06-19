import React from 'react';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const NavActiveSection = props => {
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
            <li className="li__shop__for__mulher"><h3><a className="a__shop__for__mulher" href="/shopsmulheres">Mulher</a></h3></li>
            <li className="li__shop__for__homem"><h3><a className="a__shop__for__homem active__section" href="/shopshomens">Homem</a></h3></li>
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
           <div className="headerBannerShops">
           <div className="shops__banner__text"><strong>
           PROMOÇÂO: 20% DE DESCONTO
           <br/>
          &nbsp;na compra. de qualquer produto!
           </strong>
           </div>
           <div className="shops__banner__content"><strong>
           entrega gratis para todo o país
           </strong>
           
           </div>
           </div>
           </div>
        </header>
    );
};

export default NavActiveSection;
