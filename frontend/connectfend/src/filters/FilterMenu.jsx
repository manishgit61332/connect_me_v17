import React from "react";
import "./filter.css";

export default function FilterMenu({ filters, setFilters, onApply, categories }) {

  const toggleFilter = (cat) => {
    if (filters.includes(cat)) {
      setFilters(filters.filter((f) => f !== cat));
    } else {
      setFilters([...filters, cat]);
    }
  };

  return (
    <div className="filter-menu">
      {categories.map((cat, idx) => (
        <label key={idx} className="filter-item">
          <input
            type="checkbox"
            checked={filters.includes(cat)}
            onChange={() => toggleFilter(cat)}
          />
          {cat}
        </label>
      ))}

      <button className="apply-filter-btn" onClick={onApply}>
        Apply Filter
      </button>
    </div>
  );
}
