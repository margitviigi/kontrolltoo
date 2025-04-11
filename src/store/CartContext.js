import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
});

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const existingIndex = state.findIndex(item => item.id === action.item.id);
      if (existingIndex !== -1) {
        const updatedItems = [...state];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          amount: updatedItems[existingIndex].amount + 1,
        };
        return updatedItems;
      } else {
        return [...state, { ...action.item, amount: 1 }];
      }
    }
  
    if (action.type === "CLEAR_CART") {
      return [];
    }
  
    return state;
  };
  
  

export const CartContextProvider = ({ children }) => {
    const [items, dispatch] = useReducer(cartReducer, []);

    const addItem = item => dispatch({ type: "ADD_ITEM", item });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });
    
    const contextValue = { items, addItem, clearCart };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

