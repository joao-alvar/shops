import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import MainNav from "../../Themes/MainNav";
import Footer from "../../components/Footer";
import CartItems from "./cart-items";
import Total from "./total";

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
        <h1>Minha Lista</h1>
        {cartItems.length === 0 ? (
          <div>Sua lista está vazia</div>
        ) : (
          <>
            <div>
              <div>
                {cartItems.map((item) => (
                  <CartItems {...item} key={item.id} {...funcs} />
                ))}
              </div>
            </div>
            <Total itemCount={itemCount} total={total} clearCart={clearCart} />
          </>
        )}
      </>
      <Footer />
    </MainNav>
  );
};

export default CartPage;
