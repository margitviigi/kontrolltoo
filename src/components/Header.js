import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const Header = () => {
    const cartCtx = useContext(CartContext);

    const totalItems = cartCtx.items.reduce(
        (total, item) => total + item.amount,
        0
    );

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={() => console.log("Klikk")}>
            Cart ({totalItems})
            </Button>
            </nav>
        </header>
    )
}

export default Header