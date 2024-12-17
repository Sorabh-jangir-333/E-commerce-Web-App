import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">E-Shop</Link>
        </div>

            {/* Navigation */}
            <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="nav-link">
                About
              </Link>
            </li>
            
            <li>
              <Link to={"/ContactUs"} className="nav-link">
                Contact
              </Link>
            </li>
           
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
