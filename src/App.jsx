import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Electronics } from "./Components/Electronics/Electronics";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-red-500">hello</div>
        <Routes>
          <Route path="/" />
          <Route path="/mens" />
          <Route path="/womens" />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
