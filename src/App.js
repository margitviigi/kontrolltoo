import { useState, useContext } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import CartContext from "./store/CartContext"; 
import CartModal from "./components/UI/Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const cartCtx = useContext(CartContext); 

  const openCartHandler = () => setModalOpen(true);
  const closeCartHandler = () => setModalOpen(false);

  return (
    <CartContextProvider>
      <Header onCartClick={openCartHandler} />
      <Meals />
      {modalOpen && (
        <CartModal open={modalOpen} onClose={closeCartHandler} />
      )}
    </CartContextProvider>
  );
};

export default App;