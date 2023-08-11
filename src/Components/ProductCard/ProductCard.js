import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, subName, author, images } = product;
  const imageURL = images && images[0] ? images[0].uri : '';
  const formatAuthor = author ? author.split(', ').reverse().join(' ') : '';

  return (
    <div className='product-card'>
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      {subName && <h3>{subName}</h3>}
      <p>{formatAuthor}</p>
    </div>
  )
}

export default ProductCard;