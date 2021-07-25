import React from 'react';
import { Link } from 'react-router-dom';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = props => {
    return (
        <div className="footer">
        <div className="footer__container">
        <div class="footer__links">
          <div class="footer__col__1">
              <span><h2>sobre shops. marketplace</h2></span>
              <ul>
                  <li><Link to="/">sobre nós</Link></li>
                  <li><Link to="/">garantia marketplace</Link></li>
                  <li><Link to="/">como é trabalhar conosco</Link></li>
              </ul>
          </div>
          <div class="footer__col__2"> 
          <span><h2>ajuda & informação</h2></span>
              <ul>
                  <li><Link to="/">entrega</Link></li>
                  <li><Link to="/">devolução</Link></li>
                  <li><Link to="/">politica de copyright</Link></li>
              </ul>
              </div>
          <div class="footer__col__3">
          <span><h2>vendas</h2></span>
              <ul>
                  <li><Link to="/">abra uma boutique</Link></li>
                  <li><Link to="/">ajuda com vendas</Link></li>
              </ul>
          </div>  
        </div>
        </div>
        <div className="footer__rights">
            <div className="all__rights"><span><CopyrightIcon style={{ fontSize: 12, position: "absolute", left: 0, bottom: ".1em" }} /> 2021 SHOPS.</span></div>
            <div className="privacy__policy">
                <ul>
                    <li><Link to="/">Privacidade &#x26; cookies</Link></li>
                    <li><Link to="/">Acessibilidade</Link></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Footer;
