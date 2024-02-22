import { Routes, Route } from "react-router-dom";
//import pages
import {
  HomePage,
  Products,
  AddProduct,
  ProductDetails,
  EditProduct,
} from "./pages";
//import Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 gap-20 mx-36">
        <Sidebar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/products" Component={Products} />
          <Route path="/products/add" Component={AddProduct} />
          <Route path="/products/:id" Component={ProductDetails} />
          <Route path="/products/edit/:id" Component={EditProduct} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
