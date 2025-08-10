import { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../../config.js";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/product/list`);
        if (res.data?.success) {
          setProducts(res.data.products);
        } else {
          console.error(res.data?.message || "Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-gray-500 text-lg">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              {product.image ? (
                <img
                  src={`${serverUrl}/${product.image}`}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  {product.category}
                </p>
                <p className="text-gray-700 text-sm line-clamp-2">
                  {product.description}
                </p>
                <p className="mt-3 text-lg font-bold text-green-600">
                  ${product.price}
                </p>

                {/* View Details Button */}
                <Link
                  to={`/product/${product._id}`}
                  className="mt-4 block text-center bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
