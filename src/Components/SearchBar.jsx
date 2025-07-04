import React from "react";
import useStore from "../hooks/useStore";

export default function SearchBar() {
  const { setSearchQuery, triggerSearch, resetSearch } = useStore();

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 p-3 rounded-md border shadow-md"
        onChange={(e) => {
          setSearchQuery(e.target.value);
          resetSearch(); // Reset until user explicitly searches
        }}
      />
      <button
        onClick={triggerSearch}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Search
      </button>
    </div>
  );
}
