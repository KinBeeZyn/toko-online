// Utility kecil untuk mengirim event "page_view" ke Google Analytics
// setiap kali pengguna berpindah halaman di dalam aplikasi React (SPA).
// GA4 hanya otomatis mencatat kunjungan pertama; perpindahan halaman
// berikutnya (lewat React Router, tanpa reload) perlu dikirim manual.

export function trackPageView(path) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: path,
    });
  }
}

// Bisa juga dipakai untuk melacak aktivitas pengguna lain, misalnya:
// trackEvent("view_product", { product_name: "Kaos Polos" })
export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
