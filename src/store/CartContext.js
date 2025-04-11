import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      let updatedItems;
  
      if (existingItemIndex !== -1) {
        updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          amount: existingItem.amount + 1,
        };
      } else {
        updatedItems = [...prevItems, { ...item, amount: 1 }];
      }
      const addedItem = updatedItems.find(i => i.id === item.id);
      console.log("Lisatud toode:", addedItem);
  
      return updatedItems;
    });
  };


  const contextValue = {
    items,
    addItem,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;