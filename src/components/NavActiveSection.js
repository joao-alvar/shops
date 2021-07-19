import React from 'react';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchIcon from '@material-ui/icons/Search';

const NavActiveSection = props => {
    return (
        <header>
        <div className="headerContainer">
           <div className="headerRoom">
           <div className="headerRoom__wrap">
           <ul className="headerRoom__ul">
           <li><Link to="/">Marketplace</Link></li>
           <li><Link to="/" className="faq">Ajuda & FAQs</Link></li>
           </ul>
           </div>
           </div>
            <nav>
            <div className="nav__main__links">
            <div className="logo"><h2><Link to="/">Shops.</Link></h2></div>
            <ul className="nav__primary__ul">
            <li className="li__shop__for__mulher"><h3><Link className="a__shop__for__mulher" to="/shopsmulheres">Mulher</Link></h3></li>
            <li className="li__shop__for__homem"><h3><Link className="a__shop__for__homem active__section" to="/shopshomens">Homem</Link></h3></li>
            </ul>
            </div>
            <div className="search__bar__container">
            <form>
            <input type="search" placeholder="pesquisar por items" className="search__bar" required></input>
            <button type="submit" className="search__bar__btn"><SearchIcon  style={{ fontSize: 20, cursor: "pointer", color: "#2d2d2d" }} /></button>
            </form>
            </div>
            <div className="nav__icons">
            <ul className="icon__list">
            <div className="tooltip__container">
            <li><PersonOutlineIcon  style={{ fontSize: 29, cursor: "pointer" }} /></li>
            <span class="tooltip__links">
                <ul>
                    <li><h3>minha conta</h3></li>
                    <li><Link to="/signin" className="sign__in__btn">entrar</Link></li>
                    <li><Link to="/registration" className="register__btn">resgistre-se</Link></li>
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
