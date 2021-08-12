import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router";
import { ProductsContext } from "../../context/products-context";
import SecondaryNav from "../../Themes/SecondaryNav";
import Footer from "../Footer";
import Services from "../Services";

const ProductPage = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    // se produto não existe redirecionar para página do produto
    if (!product) {
      return push("/");
    }

    setProduct(product);
  }, [id, product, products, push]);
  if (!product) {
    return null;
  }
  const { imageURL, title, price, description } = product;
  return (
    <SecondaryNav>
      <section className="product__page__wrap">
        <div className="product__page__img__wrap">
          <img src={imageURL} alt={title} />
        </div>
        <div className="product__page__container">
          <div className="product__page__title">
            <h1>{title}</h1>
            <p>R$ {price}</p>
          </div>
          <div className="product__page__description">
            <h3 className="product__page__description__h3">Sobre o produto</h3>
            <p>{description}</p>
          </div>
          <div className="product__page__btn">
            <button className="btn__product btn__primary">minha lista</button>
            <button className="btn__product btn__secondary">
              compre agora
            </button>
          </div>
        </div>
      </section>
      <Services />
      <Footer />
    </SecondaryNav>
  );
};

export default withRouter(ProductPage);
