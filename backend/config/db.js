const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/toko_online";
    await mongoose.connect(uri);
    console.log(`[MongoDB] Terhubung ke: ${uri}`);
  } catch (error) {
    console.error(`[MongoDB] Gagal terhubung: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
