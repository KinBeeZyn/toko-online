import { Link } from "react-router-dom";
import { ShoppingCart, Package } from "lucide-react";

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

function ProductCard({ product }) {
  const lowStock = product.stock > 0 && product.stock <= 10;
  const outOfStock = product.stock === 0;

  return (
    <Link to={`/products/${product._id}`} className="product-card">
      <div className="product-card-img-wrap">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card-img"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect width='100%25' height='100%25' fill='%23eef1f6'/></svg>";
          }}
        />
        <span className="product-card-category">{product.category}</span>
        {outOfStock && <span className="product-card-stock-tag out">Stok Habis</span>}
        {!outOfStock && lowStock && (
          <span className="product-card-stock-tag low">Stok Terbatas</span>
        )}
      </div>

      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p className="product-card-desc">{product.description}</p>

        <div className="product-card-footer">
          <span className="product-card-price">{formatRupiah(product.price)}</span>
          <span className="product-card-stock">
            <Package size={13} /> {product.stock}
          </span>
        </div>

        <button className="product-card-cta" tabIndex={-1}>
          <ShoppingCart size={16} />
          Lihat Detail
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
