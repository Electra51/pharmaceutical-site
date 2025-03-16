import axios from "axios";
import React, { useState } from "react";

const HHoo = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    product_name: "",
    image: "",
    category: "",
    status: "",
    price: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let imageUrl = value.image;

      if (image) {
        const imageFormData = new FormData();
        imageFormData.append("image", image);

        const imageUploadResponse = await axios.post(
          `http://localhost:8080/api/v1/upload-image`,
          imageFormData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        imageUrl = imageUploadResponse.data.url;
      }

      const categoryData = { ...value, image: imageUrl };

      await axios.post(
        `http://localhost:8080/api/v1/product-add`,
        categoryData
      );

      setValue({
        product_name: "",
        image: "",
        category: "",
        status: "",
        price: "",
      });
      setImage(null);
    } catch (error) {
      console.error("Error creating category:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded-md w-96 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full rounded-md"
          value={value.product_name}
          onChange={(e) => setValue({ ...value, product_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="category"
          className="border p-2 w-full rounded-md"
          value={value.category}
          onChange={(e) => setValue({ ...value, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="status"
          className="border p-2 w-full rounded-md"
          value={value.status}
          onChange={(e) => setValue({ ...value, status: e.target.value })}
        />
        <input
          type="text"
          placeholder="price"
          className="border p-2 w-full rounded-md"
          value={value.price}
          onChange={(e) => setValue({ ...value, price: e.target.value })}
        />
        <input
          type="file"
          className="border p-2 w-full rounded-md"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
          disabled={loading}>
          {loading ? "Submitting..." : "Add Category"}
        </button>
      </form>
    </div>
  );
};

export default HHoo;
