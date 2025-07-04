import React from "react";
import useStore from "../hooks/useStore";
import { FaTrash } from "react-icons/fa"; // ✅ Import icon

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useStore();

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="mb-2 flex justify-between items-center border-b py-2"
              >
                <div className="text-gray-800">
                  {item.title} x {item.quantity}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
