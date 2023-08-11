import "./Catalog.css";
import ProductCard from "../ProductCard/ProductCard";

const Catalog = ({ data }) => {
  const skuSet = new Set();
  const uniqueProducts = data.products.filter((product) => {
    if (!skuSet.has(product.sku)) {
      skuSet.add(product.sku);
      return true;
    }
    return false;
  });
  const filteredProducts = uniqueProducts.filter(
    (product) =>
      product.name && product.author && product.images && product.images[0]
  );
  const sortedProducts = filteredProducts.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  return (
    <div className="catalog">
      {sortedProducts.map(({ sku, ...product }) => (
        <ProductCard key={sku} product={product} />
      ))}
    </div>
  );
};

export default Catalog;
