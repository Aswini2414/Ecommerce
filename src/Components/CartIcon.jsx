// components/CartIcon.js
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Optional icon
import useStore from "../hooks/useStore";

export default function CartIcon() {
  const { cart } = useStore();
  const navigate = useNavigate();

  // Total items (sum of quantities)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
      <FaShoppingCart className="text-2xl text-gray-800" />

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
}
