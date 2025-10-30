import Image from "next/image";
import "./Footer.css";
import FooterClient from "./FooterClient";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top section */}
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <div className="currency">
            <h4>CURRENCY</h4>
            <p>
              <Image src="/us.png" alt="USD" width={40} height={25} />
              USD
            </p>
            <small>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </small>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <FooterClient />

      <div className="footer-copy">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
