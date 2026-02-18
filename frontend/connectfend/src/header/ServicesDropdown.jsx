import React from "react";
import { Link } from "react-router-dom";
import serviceData from "../data/serviceData";
import "./productsDropdown.css"; // Reuse existing styles for consistency

export default function ServicesDropdown({ onClose, specificCategory }) {
    // Filter data if specificCategory is provided
    const filteredData = specificCategory
        ? serviceData.filter(cat => cat.category === specificCategory)
        : serviceData;

    return (
        <div className="prod-dropdown" onClick={(e) => e.stopPropagation()}>
            <div className="prod-grid-container" style={{ gridTemplateColumns: `repeat(${filteredData.length}, 1fr)` }}>
                {filteredData.map((catBlock, idx) => (
                    <div key={idx} className="prod-col">
                        {/* Main Category Title */}
                        <h1 className="prod-main-title">{catBlock.category}</h1>

                        <div className="prod-list">
                            {catBlock.items.map((item, i) => (
                                <Link
                                    key={i}
                                    to={`/services/${catBlock.slug}/${item.id}`}
                                    className="prod-link"
                                    onClick={onClose}
                                >
                                    <span className="prod-link-label">{item.name}</span>
                                </Link>
                            ))}
                        </div>
                        {/* Mobile divider */}
                        {idx < filteredData.length - 1 && <div className="prod-mobile-divider"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
