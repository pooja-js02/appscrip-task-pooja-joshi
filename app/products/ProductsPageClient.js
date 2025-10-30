"use client";
import React, { useEffect, useState } from "react";
import "./Product.css";
import { useSearch } from "../context/SearchContext";

export default function ProductsPageClient({ products }) {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState("Recommended");
  const [wishlist, setWishlist] = useState([]);

  const { searchTerm } = useSearch();

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Filter based on search
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSortedProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSortedProducts(filtered);
    }
  }, [searchTerm, products]);

  // Sorting logic
  const handleSort = (option) => {
    setSortOption(option);
    let sorted = [...products];

    if (option === "Price: Low to High") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "Price: High to Low") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setSortedProducts(sorted);
  };

  // Wishlist toggle
  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <div className={`page-container ${showFilter ? "filter-open" : ""}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${showFilter ? "visible" : ""}`}>
        <button className="close-btn" onClick={() => setShowFilter(false)}>
          ✖
        </button>
        <div className="filter-container">
          <h4>FILTERS</h4>

          <div className="filter-item">
            <label>Customizable</label>
            <input type="checkbox" />
          </div>

          <div className="filter-item">
            <label>Ideal For</label>
            <select>
              <option>All</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Occasion</label>
            <select>
              <option>All</option>
              <option>Casual</option>
              <option>Party</option>
              <option>Formal</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Fabric</label>
            <select>
              <option>All</option>
              <option>Cotton</option>
              <option>Silk</option>
              <option>Denim</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Pattern</label>
            <select>
              <option>All</option>
              <option>Printed</option>
              <option>Solid</option>
              <option>Checked</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <div className="header-left">
            <h3>{sortedProducts.length} ITEMS ➤</h3>
            <button className="filter-toggle" onClick={() => setShowFilter(true)}>
              ☰ Show Filter
            </button>
          </div>

          <select
            className="sort-select"
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className={`product-grid ${showFilter ? "three-cols" : "four-cols"}`}>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div
                  className="wishlist-icon"
                  onClick={() => toggleWishlist(product)}
                >
                  {isInWishlist(product.id) ? "❤️" : "🤍"}
                </div>
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p className="signin">
                  Sign in or Create an account to see pricing
                </p>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
