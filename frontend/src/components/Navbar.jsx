import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Search, User, LogOut, PackagePlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <ShoppingBag size={24} strokeWidth={2.4} />
          <span>Toko Online</span>
        </Link>

        <div className="navbar-search">
          <input type="text" placeholder="Cari produk terbaik di sini..." />
          <button aria-label="Cari">
            <Search size={18} />
          </button>
        </div>

        <div className="navbar-links">
          <Link to="/">Beranda</Link>
          <Link to="/products">Daftar Produk</Link>
          <div className="navbar-cart">
            <ShoppingCart size={20} />
            <span>Keranjang</span>
            <span className="cart-badge">3</span>
          </div>

          {isAuthenticated ? (
            <>
              <Link to="/tambah-produk" className="navbar-add-product">
                <PackagePlus size={18} />
                Tambah Produk
              </Link>
              <div className="navbar-user">
                <User size={18} />
                <span>{user?.name}</span>
              </div>
              <button className="navbar-login" onClick={handleLogout}>
                <LogOut size={18} />
                Keluar
              </button>
            </>
          ) : (
            <Link to="/login" className="navbar-login">
              <User size={18} />
              Masuk
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
