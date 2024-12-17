import React from "react";
import "./Category.css";
export default function ({ finalCategory, setCatname }) {
  let cat = finalCategory.map((v, i) => {
    return (
      <li
        onClick={() => setCatname(v)}
        key={i}
        className="category-item"
      >
        {v?.name}
      </li>
    );
  });

  return (
    <div className="category-container">
      <h3 className="category-header">Product Category</h3>
      <ul className="category-list">{cat}</ul>
    </div>
  );
}
