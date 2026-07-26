require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware CORS
// FRONTEND_URL diisi di .env saat deployment (contoh: https://toko-online.vercel.app)
// Jika tidak diisi, semua origin diizinkan (mode development/lokal)
const allowedOrigin = process.env.FRONTEND_URL || "*";
app.use(
  cors({
    origin: allowedOrigin,
  })
);
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Toko Online berjalan. Gunakan endpoint /api/products atau /api/auth");
});

const PORT = process.env.PORT || 5000;

// Hubungkan ke MongoDB lalu jalankan server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
});

module.exports = app;
