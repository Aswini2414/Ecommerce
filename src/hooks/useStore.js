import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const useStore = create((set, get) => ({
  products: [],
  categories: [],
  cart: [],
  loading: false,
  selectedCategory: null,
  searchQuery: "",
  searchTriggered: false,

  getAllProducts: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      set({ products: res.data });
    } catch (error) {
      toast.error(error.message);
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },

  fetchCategories: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      set({ categories: res.data });
    } catch (error) {
      toast.error(error.message);
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },

  fetchProductsByCategory: async (category) => {
    set({ loading: true });
    set({ selectedCategory: category });
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      set({ products: res.data });
    } catch (error) {
      toast.error(error.message);
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  triggerSearch: () => set({ searchTriggered: true }),
  resetSearch: () => set({ searchTriggered: false }),

  getFilteredProducts: () => {
    const { products, searchQuery } = get();
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },

  addToCart: (product) => {
    const { cart } = get();
    const exists = cart.find((item) => item.id == product.id);
    if (exists) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        cart: [...cart, { ...product, quantity: 1 }],
      });
    }
  },

  removeFromCart: (id) => {
    const { cart } = get();
    set({ cart: cart.filter((item) => item.id != id) });
  },

  clearCart: () => set({ cart: [] }),
}));

export default useStore;
