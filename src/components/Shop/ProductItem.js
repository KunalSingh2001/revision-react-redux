import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../Redux/cart';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { id, title, price, description } = props;
    
    function addToCart() {

        dispatch(cartActions.add({id, title, price, description, total:price}))
    }
    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
