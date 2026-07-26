const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama produk wajib diisi"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Deskripsi produk wajib diisi"],
    },
    price: {
      type: Number,
      required: [true, "Harga produk wajib diisi"],
      min: [0, "Harga tidak boleh negatif"],
    },
    category: {
      type: String,
      default: "Umum",
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Stok tidak boleh negatif"],
    },
    imageUrl: {
      type: String,
      default: "https://via.placeholder.com/300x300.png?text=Produk",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
