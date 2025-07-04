// components/Header.js
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo / Home */}
      <Link to="/" className="text-2xl font-bold text-green-500">
        🛍️ MyShop
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        {/* Add Product Link */}
        <Link
          to="/add-product"
          className="text-green-500 font-medium hover:underline"
        >
          Add New Product
        </Link>

        {/* Cart Icon */}
        <CartIcon />
      </div>
    </header>
  );
}
