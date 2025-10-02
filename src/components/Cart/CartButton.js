import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {cartActions } from "../Redux/cart"
const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.carts);
  const dispath = useDispatch();  
  function toggleC() {
    dispath(cartActions.cartToggle())
  }
  return (
    <button className={classes.button} onClick={toggleC}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
