import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
});


const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
      const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
      const updatedItems = [...state.items];
  
      if (existingItemIndex !== -1) {
        const existingItem = updatedItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, amount: 1 });
      }
  
      console.log("Ostukorvis:", updatedItems);
  
      return {
        items: updatedItems,
      };
    }
  
    return state;
  };
  

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: []});

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };

  const contextValue = {
    items: cartState.items,
    addItem,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

