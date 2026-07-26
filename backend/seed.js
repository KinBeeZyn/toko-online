require("dotenv").config();
const connectDB = require("./config/db");
const Product = require("./models/Product");

// Catatan: imageUrl di bawah menunjuk ke file lokal di folder
// frontend/public/images/ — cukup taruh file foto dengan nama yang SAMA PERSIS
// di folder tersebut, dan foto akan otomatis muncul di aplikasi.
const sampleProducts = [
  {
    name: "Kaos Polos Katun Combed",
    description: "Kaos polos bahan katun combed 30s, nyaman dipakai sehari-hari.",
    price: 85000,
    category: "Pakaian",
    stock: 50,
    imageUrl: "/images/kaos-polos.jpg",
  },
  {
    name: "Sepatu Sneakers Casual",
    description: "Sepatu sneakers ringan dengan sol empuk, cocok untuk aktivitas harian.",
    price: 250000,
    category: "Sepatu",
    stock: 30,
    imageUrl: "/images/sneakers.jpg",
  },
  {
    name: "Tas Ransel Laptop",
    description: "Tas ransel anti air dengan kompartemen laptop 15 inci.",
    price: 175000,
    category: "Tas",
    stock: 20,
    imageUrl: "/images/tas-ransel.jpg",
  },
  {
    name: "Jam Tangan Digital",
    description: "Jam tangan digital tahan air dengan fitur stopwatch dan alarm.",
    price: 120000,
    category: "Aksesoris",
    stock: 40,
    imageUrl: "/images/jam-tangan.jpg",
  },
  {
    name: "Topi Baseball",
    description: "Topi baseball model klasik, bahan adjustable strap.",
    price: 60000,
    category: "Aksesoris",
    stock: 60,
    imageUrl: "/images/topi.jpg",
  },
  {
    name: "Jaket Hoodie",
    description: "Jaket hoodie tebal dengan bahan fleece, hangat dan nyaman.",
    price: 195000,
    category: "Pakaian",
    stock: 25,
    imageUrl: "/images/hoodie.jpg",
  },
];

const seed = async () => {
  await connectDB();
  await Product.deleteMany();
  await Product.insertMany(sampleProducts);
  console.log("Data contoh produk berhasil dimasukkan.");
  process.exit();
};

seed();
