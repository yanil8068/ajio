import { useParams, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useSelector, useDispatch} from "react-redux";
import { addToCart } from "../../Redux/Cart/Cart";
import { addToWishlist } from "../../Redux/Wishlist/Wishlist";
import { useState, useEffect } from "react";
import ProductImage from "../../Components/Electronics/ProductImage";
import ProductDetails from "../../Components/Electronics/ProductDetails";
import RatingGraph from "../../Components/Electronics/RatingGraph";
import SimilarProducts from "../../Components/Electronics/SimilarProducts";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { allElectronicsProduct } = useSelector((state) => state.allElectronicsProduct);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const product = allElectronicsProduct.find((item) => item.id === parseInt(id));
   // Optional: To check if item is already in wishlist
   const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    const fetchSimilarProducts = () => {
      const similar = allElectronicsProduct
        .filter((item) => item.id !== parseInt(id))
        .slice(0, 4);
      setSimilarProducts(similar);
    };

    fetchSimilarProducts();
  }, [allElectronicsProduct, id]);

  const handleSimilarProductClick = (similarProductId) => {
    navigate(`/electronics/products/${similarProductId}`);
  };


  const handleAddToCart = () => {
    if (!auth.currentUser) {
      alert("Please login your account first!");
      return;
    }

    const cartItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
      size: selectedSize,
    };

    dispatch(addToCart(cartItem));
    alert(`${product.title} has been added to your cart!`);
  };

  const handleAddToWishlist = () => {
    if (!auth.currentUser) {
      alert("Please login your account first!");
      return;
    }

    const wishlistItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      size: selectedSize,
    };

    // Check if item is already in wishlist
    const isItemInWishlist = wishlistItems.some(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (isItemInWishlist) {
      alert("This item is already in your wishlist.");
      return;
    }

    dispatch(addToWishlist(wishlistItem));
    alert(`${product.title} has been added to your wishlist!`);
  };

  if (!product) {
    navigate('/electronics/products');
    return null; // Return null to avoid rendering anything after the navigation
  }
  

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <ProductImage image={product.image} title={product.title} />
        <ProductDetails
          handleAddToCart={handleAddToCart}
          handleAddToWishlist={handleAddToWishlist}
          product={product}
          selectedSize={selectedSize}
        />
      </div>
      <RatingGraph rating={product.rating} />
      <SimilarProducts
        similarProducts={similarProducts}
        handleSimilarProductClick={handleSimilarProductClick}
      />
    </div>
  );
}

export default Product;
