const sumItems = (cartItems) => {
  return {
    itemCount: cartItems.reducer((total, prod) => total + prod.quantity, 0),
    total: cartItems.reducer(
      (total, prod) => total + prod.price * prod.quantity,
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // ver se o item já está na carrinho
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    default:
      return state;
  }
};

export default cartReducer;
