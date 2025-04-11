import { useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/CartContext";
import Button from "./Button";

const CartModal = ({ open, onClose }) => {
  const dialogRef = useRef();
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce((sum, item) => {
    return sum + item.price * item.amount;
  }, 0);

  const formattedTotal = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(totalAmount);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  const handleCheckout = () => {
    alert("Order submitted!");
    cartCtx.clearCart();
    onClose();
  };

  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id}>
      {item.name} x {item.amount} –{" "}
      {new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(item.price * item.amount)}
    </li>
  ));

  return ReactDOM.createPortal(
    <dialog ref={dialogRef} className="modal cart">
      <h2>Your Cart</h2>
      <ul className="cart-item">{cartItems}</ul>
      <p className="cart-total">Total: {formattedTotal}</p>
      <div className="modal-actions">
        <Button textOnly={true} onClick={handleClose}>
          Close
        </Button>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
};

export default CartModal;
