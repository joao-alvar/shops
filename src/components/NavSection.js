import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { auth } from "../firebase/utils";
import CartIcon from "./cart-icon/cartIcon";
import SearchBar from "./SearchBar";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const NavSection = (props) => {
  const { currentUser } = useSelector(mapState);
  return (
    <header>
      <div className="headerContainer">
        <div className="headerRoom">
          <div className="headerRoom__wrap">
            <ul className="headerRoom__ul">
              <li>
                <Link to="/">Marketplace</Link>
              </li>
              <li>
                <Link to="/" className="faq">
                  Ajuda &#x26; FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <div className="nav__main__links">
            <div className="logo">
              <h2>
                <Link to="/">Shops.</Link>
              </h2>
            </div>
            <ul className="nav__primary__ul">
              <li className="li__shop__for__mulher">
                <h3>
                  <Link
                    className="a__shop__for__mulher active__section"
                    to="/shopsmulheres"
                  >
                    Mulher
                  </Link>
                </h3>
              </li>
              <li className="li__shop__for__homem">
                <h3>
                  <Link className="a__shop__for__homem" to="/shopshomens">
                    Homem
                  </Link>
                </h3>
              </li>
            </ul>
          </div>
          <div className="search__bar__container">
            <SearchBar />
          </div>
          <div className="nav__icons">
            <ul className="icon__list">
              <div className="tooltip__container">
                <li className="user__icon__wrap">
                  <PersonOutlineIcon
                    style={{ fontSize: 29, cursor: "pointer" }}
                  />
                </li>
                <span className="tooltip__links">
                  {!currentUser && (
                    <ul>
                      <li>
                        <h3>minha conta</h3>
                      </li>
                      <li>
                        <Link to="/signin" className="sign__in__btn">
                          entrar
                        </Link>
                      </li>
                      <li>
                        <Link to="/registration" className="register__btn">
                          resgistre-se
                        </Link>
                      </li>
                    </ul>
                  )}

                  {currentUser && (
                    <ul className="loged__ul">
                      <li>
                        <h3>minha conta</h3>
                      </li>
                      <li>
                        <Link className="sign__in__btn">checkout</Link>
                      </li>
                      <li onClick={() => auth.signOut()}>
                        <Link className="register__btn">sair</Link>
                      </li>
                    </ul>
                  )}
                </span>
              </div>
              <li className="bag__wrap">
                <CartIcon />
              </li>
            </ul>
          </div>
        </nav>
        <div className="headerBannerShops">
          <div className="shops__banner__text">
            <strong>
              PROMOÇÂO: 20% DE DESCONTO
              <br />
              &nbsp;na compra. de qualquer produto!
            </strong>
          </div>
          <div className="shops__banner__content">
            <strong>entrega gratis para todo o país</strong>
          </div>
        </div>
      </div>
    </header>
  );
};

NavSection.defaultProps = {
  currentUser: null,
};

export default NavSection;
