import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const {
    name,
    subName,
    author,
    category,
    images,
    pubDate,
    retailPrice,
    format,
    pages,
    onSaleDate,
    shipDate
  } = product;
  const imageURL = images && images[0] ? images[0].uri : "";
  const formatAuthor = author ? author.split(", ").reverse().join(" ") : "";

  return (
    <div className="product-card">
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      {subName && <h3>{subName}</h3>}
      <p>Author: {formatAuthor}</p>

      <div className="tooltip">
      {pubDate && <p><strong>Publication Date:</strong> {new Date(pubDate).toLocaleDateString()}</p>}
        {onSaleDate && <p><strong>On Sale Date:</strong> {new Date(onSaleDate).toLocaleDateString()}</p>}
        {shipDate && <p><strong>Ship Date:</strong> {new Date(shipDate).toLocaleDateString()}</p>}
        {retailPrice && <p><strong>Retail Price:</strong> ${retailPrice}</p>}
        {format && <p><strong>Format:</strong> {format}</p>}
        {pages && <p><strong>Pages:</strong> {pages}</p>}
        {category && <p><strong>Category:</strong> {category}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
