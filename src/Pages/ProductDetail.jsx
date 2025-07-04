import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import useStore from "../hooks/useStore";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useStore();

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner text-info text-5xl"></span>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }
  return (
    <div className="max-w-4xl mx-auto p-10">
      <Link to="/" className="text-green-500 hover:underline">
        &larr; Back to Products
      </Link>
      <div className="flex flex-col md:flex-row mt-6 gap-10 shadow-lg p-6 rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-contain h-80"
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-green-500 text-xl font-semibold">
            ${product.price}
          </p>
          <p className="text-sm text-gray-500 italic">
            Category: {product.category}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="cursor-pointer bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
