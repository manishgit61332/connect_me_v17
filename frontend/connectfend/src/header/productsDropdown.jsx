import React from "react";
import { Link } from "react-router-dom";
import productData from "../data/productData";
import "./productsDropdown.css";

export default function ProductsDropdown({ onClose }) {
  return (
    <div className="prod-dropdown" onClick={(e) => e.stopPropagation()}>
      <div className="prod-grid-container">
        {productData.map((catBlock, idx) => (
          <div key={idx} className="prod-col">
            {/* Main Category Title (Clickable to category listing) */}
            <Link
              to={`/products/${catBlock.slug}`}
              className="prod-main-title-link"
              onClick={onClose}
            >
              <h1 className="prod-main-title">{catBlock.category}</h1>
            </Link>

            <div className="prod-list">
              {catBlock.subcategories
                .filter((sub) => sub.slug !== "lorawan-gateway")
                .map((sub, i) => (
                  <Link
                    key={i}
                    to={`/products/${catBlock.slug}/${sub.slug}`}
                    className="prod-link"
                    onClick={onClose}
                  >
                    <span className="prod-link-label">
                      {sub.name === "Maintenance Management Software"
                        ? "Maintenance Management"
                        : sub.name}
                    </span>
                  </Link>
                ))}
              {catBlock.category === "Gateways & Connectivity" && (
                <Link
                  to="/products/any/all/tosi-industrial-gateway"
                  className="prod-link"
                  onClick={onClose}
                >
                  <span className="prod-link-label">Tosi Network Routers</span>
                </Link>
              )}
            </div>

            {/* Mobile divider */}
            {idx < productData.length - 1 && <div className="prod-mobile-divider"></div>}
          </div>
        ))}
      </div>

      {/* VIEW MORE / CONTACT BUTTON */}
      <Link to="/products" className="prod-view-more" onClick={onClose}>
        View All Products →
      </Link>
    </div>
  );
}