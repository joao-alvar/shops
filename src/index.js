import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import App from "./App";
import ProductsContextProvider from "./context/products-context";
import CartContextProvider from "./context/cart-context";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
