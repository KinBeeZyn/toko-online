import { Link } from "react-router-dom";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  Headphones,
  Tag,
  Shirt,
  Smartphone,
  Sofa,
  Sparkles,
  Dumbbell,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Produk Terlengkap",
    desc: "Ribuan pilihan produk untuk kebutuhan Anda",
    bg: "#e8edff",
    color: "#3b5bfd",
  },
  {
    icon: Tag,
    title: "Harga Terbaik",
    desc: "Dapatkan harga terjangkau setiap hari",
    bg: "#e3f9ee",
    color: "#16a34a",
  },
  {
    icon: ShieldCheck,
    title: "Transaksi Aman",
    desc: "Sistem keamanan terjamin",
    bg: "#f1ebfe",
    color: "#8b5cf6",
  },
  {
    icon: Headphones,
    title: "Bantuan 24/7",
    desc: "Kami siap membantu kapan saja",
    bg: "#fff3e0",
    color: "#f97316",
  },
];

const categories = [
  { icon: Shirt, name: "Fashion", desc: "Pakaian & Aksesoris", count: "120+ Produk", bg: "#3b5bfd" },
  { icon: Smartphone, name: "Elektronik", desc: "Gadget & Elektronik", count: "90+ Produk", bg: "#16a34a" },
  { icon: Sofa, name: "Home & Living", desc: "Perlengkapan Rumah", count: "150+ Produk", bg: "#8b5cf6" },
  { icon: Sparkles, name: "Kecantikan", desc: "Beauty & Personal Care", count: "80+ Produk", bg: "#f59e0b" },
  { icon: Dumbbell, name: "Olahraga", desc: "Sport & Outdoor", count: "70+ Produk", bg: "#ef4444" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <span className="hero-badge">SELAMAT DATANG</span>
          <h1>
            Selamat Datang di <br />
            Toko <span className="highlight">Online</span>
          </h1>
          <p>
            Temukan berbagai produk pilihan dengan harga terbaik. Belanja
            mudah, cepat, dan terpercaya.
          </p>
          <Link to="/products" className="btn-primary">
            <ShoppingBag size={18} />
            Lihat Semua Produk
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="hero-graphic">
          <div className="hero-card card-1">
            <ShieldCheck size={18} />
            <span>Aman & Terpercaya</span>
          </div>
          <div className="hero-card card-2">
            <Tag size={18} />
            <span>Produk Berkualitas</span>
          </div>
          <div className="hero-phone">
            <ShoppingBag size={72} strokeWidth={1.4} />
          </div>
          <div className="hero-card card-3">
            <Truck size={18} />
            <span>Pengiriman Cepat</span>
          </div>
          <div className="hero-card card-4">
            <Headphones size={18} />
            <span>Layanan 24/7</span>
          </div>
        </div>
      </section>

      {/* FEATURES BAR */}
      <section className="features-bar">
        {features.map((f, i) => (
          <div className="feature-item" key={i}>
            <div className="feature-icon" style={{ background: f.bg, color: f.color }}>
              <f.icon size={22} />
            </div>
            <div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CATEGORIES */}
      <section className="categories-section">
        <div className="categories-header">
          <h2>Kategori Pilihan</h2>
          <Link to="/products" className="see-all-link">
            Lihat Semua Kategori <ChevronRight size={16} />
          </Link>
        </div>
        <div className="categories-grid">
          {categories.map((c, i) => (
            <Link to="/products" className="category-card" key={i}>
              <div className="category-icon" style={{ background: c.bg }}>
                <c.icon size={22} color="#fff" />
              </div>
              <h4>{c.name}</h4>
              <p>{c.desc}</p>
              <span className="category-count">{c.count}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
