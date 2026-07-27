import { useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import { PackageSearch, Loader2 } from "lucide-react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  console.log("ProductList mounted");

  const fetchProducts = async () => {
    try {
      console.log("Memanggil API...");
      const response = await api.get("/products");
      console.log(response.data);
      setProducts(response.data.data);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat data produk. Pastikan backend berjalan.");
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);}
