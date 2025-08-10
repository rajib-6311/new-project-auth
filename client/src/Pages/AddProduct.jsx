import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { serverUrl } from "../../config.js";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ token }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUploadProduct = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();

      
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      
      if (image) {
        data.append("image", image);
      }

      const response = await axios.post(`${serverUrl}/api/product/add`, data, {
        headers: {
          token,
          "Content-Type": "multipart/form-data",
        },
      });

      const responseData = response.data;

      if (responseData?.success) {
        toast.success(responseData?.message);
        navigate("/list");
      } else {
        toast.error(responseData?.message);
      }
    } catch (error) {
      console.error("Product data uploading error", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] py-12 bg-gray-50">
      <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 capitalize">
          Add Product
        </h2>

        <form onSubmit={handleUploadProduct}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Product Name */}
            <div>
              <label className="text-gray-700" htmlFor="name">
                Product Name
              </label>
              <input
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                type="text"
                className="block w-full px-4 py-2 mt-2 border rounded-md"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-gray-700" htmlFor="category">
                Category
              </label>
              <select
                name="category"
                onChange={handleChange}
                value={formData.category}
                id="category"
                className="border p-2 rounded-md w-full"
                required
              >
                <option value="">Select Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="text-gray-700" htmlFor="price">
                Price
              </label>
              <input
                id="price"
                name="price"
                onChange={handleChange}
                value={formData.price}
                type="number"
                className="block w-full px-4 py-2 mt-2 border rounded-md"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="text-gray-700" htmlFor="image">
                Product Image
              </label>
              <input
                id="image"
                type="file"
                onChange={handleFileChange}
                className="block w-full px-4 py-2 mt-2 border rounded-md"
                accept="image/*"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-4">
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={formData.description}
              className="block w-full px-4 py-2 mt-2 border rounded-md"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 text-white bg-gray-700 rounded-md hover:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
