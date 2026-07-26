const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware untuk melindungi route yang butuh login (proteksi route)
const protect = async (req, res, next) => {
  let token;

  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    try {
      token = authHeader.split(" ")[1];

      // Verifikasi token JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Ambil data user (tanpa password) dan tempel ke request
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ success: false, message: "User tidak ditemukan" });
      }

      return next();
    } catch (error) {
      return res.status(401).json({ success: false, message: "Token tidak valid atau sudah kedaluwarsa" });
    }
  }

  return res.status(401).json({ success: false, message: "Akses ditolak, silakan login terlebih dahulu" });
};

module.exports = { protect };
