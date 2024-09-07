import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, selectUsers } from "./Redux/Authentication/usersSlice";
import { auth } from "./firebase/config";
import Mens from "./Pages/Mens/Mens";
import MensProductDetail from "./Pages/Mens/MensProductDetail";
import MensProduct from "./Pages/Mens/MensProduct";
import Jewellery from "./Pages/Jewellery/Jewellery";
import WomensPage from "./Pages/Womens/Womens";
import  Home  from "./Pages/Homepage/Home";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";

import  Electronics  from "./Pages/Electronics/Electronics";
import  AllProduct  from "./Pages/Electronics/AllProduct";
import  Product  from "./Pages/Electronics/Product";
import Footer from "./Components/Footer/Footer";


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUsers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(setUser({ id: user.uid, email: user.email }));
      } else {
        // User is signed out
        dispatch(setUser(null));
      }
      setLoading(false); // Stop loading once auth state is resolved
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while checking auth
  }

  return (
    <BrowserRouter>
      <Routes>
        {user.currentUser ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/electronics" element={<Electronics />} />

            <Route path="/jewellery" element={<Jewellery />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/mens/:id" element={<MensProductDetail />} />
            <Route path="/mens/list" element={<MensProduct />} />
            <Route path="/womens" element={<WomensPage />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/mens/:id" element={<MensProductDetail />} />
            <Route path="/mens/list" element={<MensProduct />} />
            <Route path="/womens" element={<WomensPage />} />

            <Route path="/electronics" element={<Electronics />} />
            <Route path="/electronics/products" element={<AllProduct/>} />
            <Route path="/electronics/products/:id" element={<Product/>} />
            <Route path="/jewellery" element={<Jewellery />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
