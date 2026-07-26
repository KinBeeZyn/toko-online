import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data.data);
      } catch (err) {
        setError("Produk tidak ditemukan.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="status-msg">Memuat detail produk...</p>;
  if (error) return <p className="status-msg status-error">{error}</p>;

  return (
    <div className="product-detail">
      <Link to="/products" className="back-link">
        ← Kembali ke Daftar Produk
      </Link>
      <div className="product-detail-content">
        <img src={product.imageUrl} alt={product.name} className="product-detail-img" />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="product-detail-category">Kategori: {product.category}</p>
          <p className="product-detail-price">{formatRupiah(product.price)}</p>
          <p className="product-detail-stock">Stok tersedia: {product.stock}</p>
          <p className="product-detail-desc">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
