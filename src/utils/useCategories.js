import { useState, useEffect } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/category`
        );
        setCategories(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;
