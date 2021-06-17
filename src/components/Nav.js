import React from 'react';

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
            <li className="li__shop__for__mulher"><h3><a href="#">Mulher</a></h3></li>
            <li className="li__shop__for__homem"><h3><a href="#">Homem</a></h3></li>
            </ul>
            </div>
            </nav>
           <div className="headerBanner"></div>
           </div>
        </header>
    );
};

export default Nav;
