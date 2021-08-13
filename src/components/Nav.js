import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { auth } from "../firebase/utils";
import CartIcon from "./cart-icon/cartIcon";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import SearchBar from "./SearchBar";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Nav = (props) => {
  const { currentUser } = useSelector(mapState);

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const [searchOpen, setSearchOpen] = useState(false);

  function openClick() {
    setSearchOpen(!searchOpen);
  }
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
            <div className="menu__icon">
              <div
                className={isOpen ? "menu__btn open" : "menu__btn"}
                onClick={handleClick}
              >
                <div className="menu__btn__burger"></div>
              </div>
            </div>
            <div className="logo">
              <h2>
                <Link to="/">Shops.</Link>
              </h2>
            </div>
            <ul
              className={
                isOpen ? "nav__primary__ul menuOpen" : "nav__primary__ul"
              }
            >
              <li className="li__shop__for__mulher nav__li">
                <h3 onClick={handleClick}>
                  <Link className="a__shop__for__mulher" to="/shopsmulheres">
                    Mulher
                  </Link>
                </h3>
              </li>
              <li className="li__shop__for__homem nav__li">
                <h3 onClick={handleClick}>
                  <Link className="a__shop__for__homem" to="/shopshomens">
                    Homem
                  </Link>
                </h3>
              </li>
            </ul>
          </div>
          <div
            className={
              searchOpen
                ? "search__bar__container menuOpen"
                : "search__bar__container"
            }
          >
            <SearchBar />
            <div className="close__icon">
              <CloseIcon
                className={
                  searchOpen ? "close__search menuOpen" : "close__search"
                }
                style={{
                  fontSize: 26,
                  cursor: "pointer",
                  marginTop: "2px",
                }}
                onClick={openClick}
              />
            </div>
          </div>
          <div className="nav__icons">
            <ul className="icon__list">
              <li className="search__icon">
                <SearchIcon
                  style={{
                    fontSize: 26,
                    cursor: "pointer",
                    marginTop: "2px",
                  }}
                  onClick={openClick}
                />
              </li>
              <div className="tooltip__container">
                <li className="user__icon__wrap">
                  <PersonOutlineIcon
                    style={{ fontSize: 29, cursor: "pointer" }}
                  />
                </li>
                <span class="tooltip__links">
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
                        <Link to="/minhalista" className="sign__in__btn">
                          checkout
                        </Link>
                      </li>
                      <li onClick={() => auth.signOut()}>
                        <Link className="register__btn">sair</Link>
                      </li>
                    </ul>
                  )}
                </span>
              </div>
              <li>
                <CartIcon />
              </li>
            </ul>
          </div>
        </nav>
        <div className="headerBanner">
          <div className="banner__shop__for__mulher">
            <Link to="/shopsmulheres">Mulher</Link>
          </div>
          <div className="banner__shop__text">
            <strong>
              PROMOÇÂO: AGORA GANHE ATÉ 80% DE DESCONTO!
              <br />
              &nbsp;A PROMOÇÂO DO SHOPS. ficou Ainda MAIOR
            </strong>
            <span class="hover__text">
              <p>
                * Digite o código na finalização da compra no aplicativo para
                receber o desconto. Vários pedidos por cliente até o gasto
                máximo de pré-desconto de R$ 199,99 / R$ 299,99. Não pode ser
                usado com outros códigos promocionais ou em vouchers-presente,
                taxas de entrega, Premier Delivery ou Shops. Marketplace. Alguns
                Produtos marcados são excluídos da promoção.
              </p>
            </span>
          </div>
          <div className="banner__shop__for__homem">
            <Link to="/shopshomens">Homem</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

Nav.defaultProps = {
  currentUser: null,
};

export default Nav;
