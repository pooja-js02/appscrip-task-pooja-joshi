"use client";
import React from "react";
import "./WishlistModal.css";

const WishlistModal = ({ isOpen, onClose, wishlist }) => {
  if (!isOpen) return null;

  return (
    <div className="wishlist-overlay" onClick={onClose}>
      <div
        className="wishlist-modal"
        onClick={(e) => e.stopPropagation()} // Prevent background click
      >
        <button className="close-btn" onClick={onClose}>✖</button>
        <h3>My Wishlist ❤️</h3>

        {wishlist.length > 0 ? (
          <div className="wishlist-items">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistModal;
