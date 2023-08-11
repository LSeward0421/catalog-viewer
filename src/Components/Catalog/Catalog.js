import './Catalog.css';
import ProductCard from '../ProductCard/ProductCard';

const Catalog = ({ data }) => {
  return (
    <div className='catalog'>
      {data.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default Catalog;