import axios from "axios";

// Saat development, otomatis pakai backend lokal.
// Saat deployment, isi environment variable VITE_API_URL di Netlify/Vercel
// dengan URL backend yang sudah dideploy, contoh:
// VITE_API_URL=https://toko-online-backend.onrender.com/api
const API_BASE_URL = import.meta.env.VITE_API_URL || "https://toko-online-production-059a.up.railway.app/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Otomatis menyisipkan token JWT (jika ada) ke setiap request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
