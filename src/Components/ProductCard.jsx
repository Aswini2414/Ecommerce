import React from "react";
import useStore from "../hooks/useStore";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useStore();

  return (
    <div className="bg-white p-4 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-xl">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 mx-auto object-contain"
        />
        <h3 className="text-lg font-semibold mt-2 text-gray-800">
          {product.title}
        </h3>
        <p className="text-green-500 font-bold">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="cursor-pointer mt-2 bg-green-500 text-white px-3 py-1 rounded-md w-full hover:bg-green-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
