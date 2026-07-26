import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Bungkus halaman yang butuh login dengan komponen ini.
// Kalau user belum login, otomatis diarahkan ke /login,
// dan setelah berhasil login akan dikembalikan ke halaman asal.
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}

export default ProtectedRoute;
