import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="breadcrumb">
        <span className="home">HOME</span> <span className="divider">|</span>{" "}
        <span className="shop">SHOP</span>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">DISCOVER OUR PRODUCTS</h1>
        <p className="hero-description">
          Explore our curated collection of premium products designed to bring
          quality, comfort, and style into your everyday life. From timeless
          essentials to the latest trends, find everything you need right here.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
