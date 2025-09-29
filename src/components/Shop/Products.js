import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from "react-redux";
const Products = (props) => {
  const products = useSelector((state) => state.products.products);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
