import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import MainNav from "../../Themes/MainNav";
import Footer from "../../components/Footer";
import CartItems from "./cart-items";
import Total from "./total";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

const CartPage = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);
  const funcs = { increase, decrease, removeProduct };
  return (
    <MainNav>
      <>
        {cartItems.length === 0 ? (
          <div className="lista__vazia">
            <LocalMallOutlinedIcon style={{ fontSize: 50 }} />
            <h2 className="lista__vazia__h2">Sua lista está vazia</h2>
            <p className="lista__vazia__p">
              adicione itens e eles aparecerão aqui.
            </p>
          </div>
        ) : (
          <>
            <div className="lista__cart__container">
              <div className="lista__cart">
                <h1>Minha Lista</h1>
                <div className="lista__cart__wrap">
                  {cartItems.map((item) => (
                    <CartItems {...item} key={item.id} {...funcs} />
                  ))}
                </div>
              </div>
              <div className="total__cart__container">
                <Total
                  itemCount={itemCount}
                  total={total}
                  clearCart={clearCart}
                />
              </div>
            </div>
          </>
        )}
      </>
      <Footer />
    </MainNav>
  );
};

export default CartPage;
