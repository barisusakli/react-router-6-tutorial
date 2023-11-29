import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {

  const els = products.map((product) => {
    return (
      <article key={product.id}>
        <h5>{product.name}</h5>
        <Link to={`/products/${product.id}`}>more info</Link>
      </article>
    )
  });

  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <div className='products'>
          {els}
        </div>
      </section>
    </>
  );
};

export default Products;
