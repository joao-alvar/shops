import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = props => {
    return (
        <div className="footer">
        <div className="footer__container">
        <div class="footer__links">
          <div class="footer__col__1">
              <span><h2>sobre shops. marketplace</h2></span>
              <ul>
                  <li><a href="/">sobre nós</a></li>
                  <li><a href="/">garantia marketplace</a></li>
                  <li><a href="/">fashion não fakes</a></li>
              </ul>
          </div>
          <div class="footer__col__2"> 
          <span><h2>sobre shops. marketplace</h2></span>
              <ul>
                  <li><a href="/">sobre nós</a></li>
                  <li><a href="/">garantia marketplace</a></li>
                  <li><a href="/">fashion não fakes</a></li>
              </ul>
              </div>
          <div class="footer__col__3">
          <span><h2>sobre shops. marketplace</h2></span>
              <ul>
                  <li><a href="/">sobre nós</a></li>
                  <li><a href="/">garantia marketplace</a></li>
                  <li><a href="/">fashion não fakes</a></li>
              </ul>
          </div>  
        </div>
        </div>
        <div className="footer__rights">
            <div className="all__rights"><span><CopyrightIcon style={{ fontSize: 12 }} /> 2021 SHOPS.</span></div>
            <div className="privacy__policy">
                <ul>
                    <li><a href="/">Privacy & cookies</a></li>
                    <li><a href="/">Ts&Cs</a></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Footer;
