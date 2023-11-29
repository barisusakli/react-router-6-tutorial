import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  const { image, name} = product;
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h2>{product.name}</h2>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
