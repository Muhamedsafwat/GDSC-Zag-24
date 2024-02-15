import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/products/:id" Component={ProductDetails} />
      </Routes>
    </div>
  );
}

export default App;
