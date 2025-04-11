import { useContext } from 'react';
import CartContext from '../store/CartContext'; // kontrolli ka tee õigsust!
import Button from './UI/Button';
import logo from '../assets/logo.jpg';

const Header = ({ onCartClick }) => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <Button textOnly onClick={onCartClick}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
