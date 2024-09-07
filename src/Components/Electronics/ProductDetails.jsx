import { FaStar } from "react-icons/fa";

function ProductDetails({ product, handleAddToCart, handleAddToWishlist }) {
  return (
    <div className="flex-grow w-full lg:w-1/2 flex flex-col">
      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>

      <div className="flex items-center mb-4">
        <FaStar className="text-green-500 mr-2" />
        <p className="text-lg font-medium text-gray-700">
          {product.rating?.rate || 0} / 5 ({product.rating?.count || 0} reviews)
        </p>
      </div>

      <p className="text-lg font-bold text-red-600 mb-4">
        MRP: {product.price}
      </p>

      <div className="border border-dotted p-4 mb-4">
        <p className="text-lg font-medium text-gray-700">Offer Code:</p>
        <p className="text-gray-600">Use code SAVE10 for 10% off</p>
      </div>

      <button
        className="text-white p-4 rounded hover:brightness-110 mb-4"
        style={{ backgroundColor: "#684904", width: "300px" }} onClick={handleAddToCart}
      >
        👜 Add to Cart
      </button>

      <button
        className="text-gray-700 p-4 rounded border border-gray-300 hover:bg-gray-100 mb-4"
        style={{ width: "300px" }} onClick={handleAddToWishlist}
      >
        ❤️ Save to Wishlist
      </button>

      <h3 className="text-xl font-semibold mb-2">Product Details</h3>

      <p className="text-md font-medium text-gray-700 mb-2">
        Brand: {product.brand || "Unknown"}
      </p>
      <p className="text-md font-medium text-gray-700 mb-4">
        Category: {product.category || "Unknown"}
      </p>

      <div className="mb-4">
        <p className="text-lg font-medium text-gray-700">Description:</p>
        <p className="text-gray-600">
          {product.description || "No description available"}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;