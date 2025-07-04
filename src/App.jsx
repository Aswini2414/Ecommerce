import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Pages/ProductsList";
import ProductDetail from "./Pages/ProductDetail";
import "./App.css";
import CartPage from "./Pages/CartPage";
import Header from "./Components/Header";
import AddProductForm from "./Pages/AddProductForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/add-product" element={<AddProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
