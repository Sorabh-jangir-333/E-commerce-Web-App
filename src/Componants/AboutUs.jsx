import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to E-Shop, your one-stop destination for the best products at unbeatable prices.
          Our mission is to provide customers with a seamless shopping experience and the highest quality products.
        </p>
        <p>
          At E-Shop, we value trust, transparency, and customer satisfaction above all else. From electronics to fashion, 
          we carefully curate every item to meet your needs. With our dedicated team and efficient delivery services, 
          we ensure your happiness with every purchase.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>High-quality products</li>
          <li>Affordable pricing</li>
          <li>Reliable customer support</li>
          <li>Secure payments</li>
        </ul>
      </div>
    </div>
  );
}
