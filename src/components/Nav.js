import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const Nav = props => {
    return (
        <header>
        <div className="headerContainer">
           <div className="headerRoom">
           <div className="headerRoom__wrap">
           <ul className="headerRoom__ul">
           <li><a>Marketplace</a></li>
           <li><a>Help & FAQs</a></li>
           </ul>
           </div>
           </div>
            <nav>
            <div className="nav__main__links">
            <div className="logo"><h2>Shops.</h2></div>
            <ul className="nav__primary__ul">
            <li className="li__shop__for__mulher"><h3><a className="a__shop__for__mulher" href="#">Mulher</a></h3></li>
            <li className="li__shop__for__homem"><h3><a className="a__shop__for__homem" href="#">Homem</a></h3></li>
            </ul>
            </div>
            <div className="nav__icons">
            <ul className="icon__list">
            <li><PersonOutlineIcon  style={{ fontSize: 29, cursor: "pointer" }} /></li>
            <li><LocalMallOutlinedIcon  style={{ fontSize: 27, cursor: "pointer"  }} /></li>
            </ul>
            </div>
            </nav>
           <div className="headerBanner">
           <div className="banner__shop__for__mulher"><a href="#">Mulher</a></div>
           <div className="banner__shop__text"><strong>
           PROMOÇÂO: AGORA GANHE ATÉ 80% DE DESCONTO!
           <br/>
          &nbsp;A PROMOÇÂO DO SHOPS. ficou Ainda MAIOR
           </strong></div>
           <div className="banner__shop__for__homem"><a href="#">Homem</a></div>
           </div>
           </div>
        </header>
    );
};

export default Nav;
