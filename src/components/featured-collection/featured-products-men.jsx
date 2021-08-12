import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import FeaturedProduct from "../shared/featured-products";

const FeaturedCollectionMen = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i > 3)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);

  return (
    <div className="container">
      <h2 className="product__collection__title">109 estilos diferentes</h2>
      <div className="products__container">
        <ul className="product__list__ul">{productItems}</ul>
      </div>
    </div>
  );
};

export default FeaturedCollectionMen;
