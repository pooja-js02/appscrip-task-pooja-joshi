"use client";
import React, { useState } from "react";
import "./Navbar.css";
import {
  FaSearch,
  FaHeart,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";
import WishlistModal from "./WishlistModal";
import { useSearch } from "../context/SearchContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  const { searchTerm, setSearchTerm } = useSearch(); // ✅ global state

  const handleSearch = (e) => {
    e.preventDefault();
    // No need to alert — Product page reacts automatically
    setSearchOpen(false);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <p>upto 30% Discount</p>
        <p>upto 30% Discount</p>
        <p>upto 30% Discount</p>
        <p>upto 30% Discount</p>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Left Section */}
        <div className="navbar-left">
          <FaBars className="hamburger" onClick={() => setMenuOpen(true)} />
          <Image
            src="/Logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="logo"
            priority
          />
        </div>

        {/* Center Section */}
        <div className="navbar-center">
          <h2 className="brand-text">STYLORE</h2>
          <ul className="nav-links">
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          {/* Search */}
          <div className="search-container">
            <FaSearch
              className="search-icon"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            {searchOpen && (
              <form className="search-form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <FaSearch className="search-icon" onClick={handleSearch} />
                <FaTimes
                  className="close-search"
                  onClick={() => setSearchOpen(false)}
                />
              </form>
            )}
          </div>

          {/* Icons */}
          <FaHeart
            className="wishlist-icon"
            onClick={() => setWishlistOpen(true)}
          />
          <FaShoppingBag />
          <FaUser className="profile-icon" />
        </div>
      </nav>

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlist={wishlist}
      />

      {/* Sidebar Menu */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>MENU</h3>
          <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>
        <ul className="sidebar-links">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </aside>

      {/* Sidebar Overlay */}
      {menuOpen && (
        <div
          className="sidebar-overlay active"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
