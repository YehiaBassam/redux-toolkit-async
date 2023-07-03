import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'The second book I ever wrote',
  },
];

const Products = (props) => {
  // const todos = useSelector((state) => state.cart.todos);  // fetch todos as test

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      {/* <div>    // fetch todos as test
        {todos.map(todo => (
          <div key={todo.id}>
            <small>id : {todo.id}</small>
            <small>title : {todo.title}</small>
            <small>userId : {todo.userId}</small>
          </div>
        )
        )}
      </div> */}

      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
