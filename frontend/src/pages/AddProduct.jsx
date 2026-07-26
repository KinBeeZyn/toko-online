import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PackagePlus } from "lucide-react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

// Halaman ini hanya bisa diakses setelah login (dibungkus ProtectedRoute di App.jsx).
// Contoh nyata penerapan "proteksi route": hanya user yang sudah autentikasi
// yang boleh menambahkan produk baru.
function AddProduct() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    imageUrl: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await api.post("/products", {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock) || 0,
      });
      setSuccess("Produk berhasil ditambahkan!");
      setTimeout(() => navigate("/products"), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menambahkan produk.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-page">
      <div className="add-product-header">
        <PackagePlus size={22} />
        <h2>Tambah Produk Baru</h2>
      </div>
      <p className="add-product-user">Masuk sebagai: <strong>{user?.name}</strong></p>

      {error && <div className="auth-error">{error}</div>}
      {success && <div className="auth-success">{success}</div>}

      <form className="add-product-form" onSubmit={handleSubmit}>
        <label>
          Nama Produk
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Deskripsi
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </label>
        <div className="add-product-row">
          <label>
            Harga (Rp)
            <input type="number" name="price" value={form.price} onChange={handleChange} required min="0" />
          </label>
          <label>
            Stok
            <input type="number" name="stock" value={form.stock} onChange={handleChange} min="0" />
          </label>
        </div>
        <label>
          Kategori
          <input name="category" value={form.category} onChange={handleChange} placeholder="contoh: Pakaian" />
        </label>
        <label>
          URL Gambar (contoh: /images/nama-file.jpg)
          <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
        </label>

        <button type="submit" className="auth-submit" disabled={loading}>
          {loading ? "Menyimpan..." : "Simpan Produk"}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
