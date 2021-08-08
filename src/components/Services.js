import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Services = (props) => {
  return (
    <>
      <div className="service__wrap">
        <div className="home__bottom__wrap">
          <div className="home__bottom__links">
            <h2>
              <Link to="/">facil entrega para qualquer lugar</Link>
            </h2>
          </div>
          <div className="home__bottom__content">
            <h2>descubra mais de 150 marcas</h2>
          </div>
        </div>
      </div>
      <div className="cards__social">
        <ul className="social__card">
          <li>
            <div className="cards__container">
              <Link className="facebook__icon cards">
                <FacebookIcon
                  style={{ fontSize: 19, cursor: "pointer", color: "#fff" }}
                />
              </Link>
            </div>
          </li>
          <li>
            <div className="cards__container">
              <Link className="instagram__icon cards">
                <InstagramIcon
                  style={{ fontSize: 19, cursor: "pointer", color: "#fff" }}
                />
              </Link>
            </div>
          </li>
          <li>
            <div className="cards__container">
              <Link className="snapchat__icon cards">
                <div className="snapchat__icon__wrap"></div>
              </Link>
            </div>
          </li>
        </ul>
        <ul className="cards__icon__wrap">
          <span className="border__icon"></span>
          <li>
            <div className="cards__icon visaCard"></div>
          </li>
          <li>
            <div className="cards__icon masterCard"></div>
          </li>
          <li>
            <div className="cards__icon payPalCard"></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Services;
