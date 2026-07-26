import { useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import { PackageSearch, Loader2 } from "lucide-react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.data);
      } catch (err) {
        setError("Gagal memuat data produk. Pastikan backend berjalan.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="status-msg">
        <Loader2 className="spin" size={28} />
        <p>Memuat produk...</p>
      </div>
    );

  if (error)
    return (
      <div className="status-msg status-error">
        <PackageSearch size={28} />
        <p>{error}</p>
      </div>
    );

  if (products.length === 0)
    return (
      <div className="status-msg">
        <PackageSearch size={28} />
        <p>Belum ada produk tersedia.</p>
      </div>
    );

  return (
    <div className="products-page">
      <div className="products-page-header">
        <h2 className="page-title">Daftar Produk</h2>
        <span className="products-count">{products.length} produk tersedia</span>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
