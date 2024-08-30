import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Electronics } from "./Components/Electronics/Electronics";
import { Mens } from "./Components/Mens/Mens";
import { Womens } from "./Components/Womens/Womens";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
