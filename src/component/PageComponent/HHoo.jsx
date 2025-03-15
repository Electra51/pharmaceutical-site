import axios from "axios";
import React, { useState } from "react";

const HHoo = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    image: "",
    slug: "",
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

      await axios.post(`http://localhost:8080/api/v1/category`, categoryData);

      setValue({
        name: "",
        image: "",
        slug: "",
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
          placeholder="Category Name"
          className="border p-2 w-full rounded-md"
          value={value.name}
          onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category Name"
          className="border p-2 w-full rounded-md"
          value={value.slug}
          onChange={(e) => setValue({ ...value, slug: e.target.value })}
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
