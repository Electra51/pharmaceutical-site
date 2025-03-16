import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/product`
        );
        setProducts(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching Products:", err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
