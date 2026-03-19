import { useEffect, useState } from "react";
import api from "../services/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [productsResponse, featuredResponse] = await Promise.all([
          api.get("/products"),
          api.get("/products/featured"),
        ]);
        setProducts(productsResponse.data);
        setFeaturedProducts(featuredResponse.data);
      } catch (requestError) {
        setError("La collection est indisponible pour le moment. Veuillez reessayer dans quelques instants.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { error, featuredProducts, loading, products };
};

export default useProducts;
