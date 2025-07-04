import React, { useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import useStore from "../hooks/useStore";
import ProductCard from "../Components/ProductCard";

const ProductsList = () => {
  const {
    categories,
    fetchCategories,
    getAllProducts,
    fetchProductsByCategory,
    selectedCategory,
    getFilteredProducts,
    searchTriggered,
    products,
    loading,
  } = useStore();
  const filteredProducts = getFilteredProducts();
  useEffect(() => {
    getAllProducts();
    fetchCategories();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Our Products
      </h1>
      <SearchBar />

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => fetchProductsByCategory(category)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          );
        })}
        <button
          onClick={getAllProducts}
          className="px-4 py-2 rounded-full border"
        >
          All
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(searchTriggered ? filteredProducts : products).map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
