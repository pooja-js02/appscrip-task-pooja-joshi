"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FooterClient() {
  useEffect(() => {
    const headers = document.querySelectorAll(".footer-col h5");
    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const parent = header.parentElement;
        parent.classList.toggle("active");
      });
    });

    // Cleanup to avoid memory leaks
    return () => {
      headers.forEach((header) => {
        header.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="footer-bottom">
      <div className="footer-col">
        <h5>mettā muse</h5>
        <ul>
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
      </div>

      <div className="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li>Orders & Shipping</li>
          <li>Join/Login as a Seller</li>
          <li>Payment & Pricing</li>
          <li>Return & Refunds</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <div className="footer-col">
        <h5>Follow Us</h5>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="footer-col">
        <h5>mettā muse ACCEPTS</h5>
        <div className="payment-images">
          <Image src="/google-pay.png" alt="Google Pay" width={40} height={25} />
          <Image src="/opay-.jpg" alt="Opay" width={40} height={25} />
          <Image src="/mastercard.png" alt="MasterCard" width={40} height={25} />
          <Image src="/amex.webp" alt="Amex" width={40} height={25} />
          <Image src="/paypal.webp" alt="PayPal" width={40} height={25} />
          <Image src="/applepay.png" alt="Apple Pay" width={40} height={25} />
        </div>
      </div>
    </div>
  );
}
