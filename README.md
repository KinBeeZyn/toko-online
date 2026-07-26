# Toko Online — Tugas Personal Lab 1 (Week 6)

Aplikasi web toko online sederhana: Frontend React + Backend Node.js/Express + MongoDB.

## Struktur Folder
```
toko-online/
├── backend/         # RESTful API (Express + Mongoose + MongoDB)
└── frontend/         # React app (Vite, React Router, Axios)
```

## Menjalankan Backend
```bash
cd backend
npm install
cp .env.example .env      # sesuaikan MONGO_URI jika perlu
npm run seed               # (opsional) isi data contoh
npm run dev                 # atau: npm start
```
Backend berjalan di `http://localhost:5000`.

## Menjalankan Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend berjalan di `http://localhost:5173` (default Vite).

## Endpoint API
| Method | Endpoint             | Keterangan          |
|--------|-----------------------|----------------------|
| GET    | /api/products          | Ambil semua produk   |
| GET    | /api/products/:id      | Ambil satu produk    |
| POST   | /api/products          | Tambah produk        |
| PUT    | /api/products/:id      | Update produk        |
| DELETE | /api/products/:id      | Hapus produk         |
