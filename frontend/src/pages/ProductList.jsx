useEffect(() => {
  console.log("ProductList mounted");

  const fetchProducts = async () => {
    try {
      console.log("Memanggil API...");
      const response = await api.get("/products");
      console.log(response.data);
      setProducts(response.data.data);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat data produk. Pastikan backend berjalan.");
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);