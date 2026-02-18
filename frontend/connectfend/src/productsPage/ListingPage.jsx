import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../data/productData";
import "./ListingPage.css";

import SEO from "../components/SEO";
// Helper to deduce tags/protocols from data for filters
const getAllTags = (products) => {
    const tags = new Set();
    products.forEach(p => {
        if (p.tags) p.tags.forEach(t => tags.add(t));
        if (p.specs && p.specs.protocol) {
            // split by comma if multiple conventions used
            p.specs.protocol.split(',').forEach(pro => tags.add(pro.trim()));
        }
    });

    // Limit to top 10 tags to reduce clutter
    return Array.from(tags).sort().slice(0, 10);
};

export default function ListingPage() {
    const { category, subcategory } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allRelevantProducts, setAllRelevantProducts] = useState([]);

    // Phase 1 Filters
    const [activeFilters, setActiveFilters] = useState([]);
    const [availableTags, setAvailableTags] = useState([]);

    // 1. Resolve Data based on URL Params
    useEffect(() => {
        let products = [];

        if (category) {
            const catData = productData.find(c => c.slug === category);
            if (catData) {
                if (subcategory) {
                    const subData = catData.subcategories.find(s => s.slug === subcategory);
                    if (subData) products = subData.products;
                } else {
                    // Flatten all subcategories if only category is selected
                    products = catData.subcategories.flatMap(s => s.products);
                }
            }
        } else {
            // Show all if no category (fallback)
            products = productData.flatMap(c => c.subcategories.flatMap(s => s.products));
        }

        setAllRelevantProducts(products);
        setFilteredProducts(products);
        setAvailableTags(getAllTags(products));
        setActiveFilters([]); // Reset filters on nav change
    }, [category, subcategory]);

    // 2. Apply Sidebar Filters
    const toggleFilter = (tag) => {
        let newFilters;
        if (activeFilters.includes(tag)) {
            newFilters = activeFilters.filter(f => f !== tag);
        } else {
            newFilters = [...activeFilters, tag];
        }
        setActiveFilters(newFilters);

        if (newFilters.length === 0) {
            setFilteredProducts(allRelevantProducts);
        } else {
            const filtered = allRelevantProducts.filter(p => {
                const pTags = p.tags || [];
                const pProto = p.specs?.protocol ? p.specs.protocol.split(',').map(s => s.trim()) : [];
                const allPTags = [...pTags, ...pProto];
                // OR logic (match any filter) or AND logic? usually AND for specs, OR within category. 
                // Let's go with: Product must match AT LEAST ONE of the active filters (OR logic) for user friendliness, 
                // OR match ALL? Badger usually does drilldown. Let's do partial match for now.
                return newFilters.some(f => allPTags.includes(f));
            });
            setFilteredProducts(filtered);
        }
    };

    const getBreadcrumb = () => {
        let crumbs = [{ label: "Products", path: "/products" }];
        const catData = productData.find(c => c.slug === category);
        if (catData) {
            crumbs.push({ label: catData.category, path: `/products/${catData.slug}` });
            if (subcategory) {
                const sub = catData.subcategories.find(s => s.slug === subcategory);
                if (sub) crumbs.push({ label: sub.name, path: `/products/${catData.slug}/${sub.slug}` });
            }
        }
        return crumbs;
    };



    const getPageTitle = () => {
        if (subcategory) {
            return productData.find(c => c.slug === category)?.subcategories.find(s => s.slug === subcategory)?.name;
        }
        return productData.find(c => c.slug === category)?.category || "All Products";
    };

    const pageTitle = getPageTitle();

    return (
        <div className="listing-page">
            <SEO
                title={`${pageTitle} - ConnectME Products`}
                description={`Explore our range of ${pageTitle} for Industrial IoT, Smart Metering, and Automation.`}
            />

            {/* HEADER / BREADCRUMB */}
            <div className="listing-header">
                <div className="listing-breadcrumb">
                    {getBreadcrumb().map((c, i) => (
                        <span key={i}>
                            <Link to={c.path}>{c.label}</Link>
                            {i < getBreadcrumb().length - 1 && " / "}
                        </span>
                    ))}
                </div>
                <h1 className="listing-title">
                    {pageTitle}
                </h1>
            </div>

            <div className="listing-layout">

                {/* SIDEBAR FILTERS */}
                <aside className="listing-sidebar">
                    {/* CATEOGRIES (Visible on root or always) */}
                    <div className="filter-group">
                        <h3 className="filter-title">Categories</h3>
                        <div className="category-list">
                            <Link to="/products" className={`category-link ${!category ? 'active' : ''}`}>
                                All Products
                            </Link>
                            {productData.map(c => (
                                <Link
                                    to={`/products/${c.slug}`}
                                    key={c.slug}
                                    className={`category-link ${category === c.slug ? 'active' : ''}`}
                                >
                                    {c.category}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3 className="filter-title">Filters</h3>
                        <div className="filter-list">
                            {availableTags.map(tag => (
                                <label key={tag} className="filter-item">
                                    <input
                                        type="checkbox"
                                        checked={activeFilters.includes(tag)}
                                        onChange={() => toggleFilter(tag)}
                                    />
                                    {tag}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* PRODUCTS GRID */}
                <main className="listing-main">
                    <p className="result-count">{filteredProducts.length} Results</p>

                    <div className="unified-products-grid">
                        {filteredProducts.map((p) => (
                            <Link key={p.id} to={`/products/${category || 'any'}/${subcategory || 'all'}/${p.id}`} className="premium-product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="product-image-wrapper">
                                    <img src={p.image} className="product-image" alt={p.name} />
                                </div>

                                <div className="product-details">
                                    <p className="product-subtitle">{p.tags?.[0] || category}</p>
                                    <h2 className="product-title">{p.name}</h2>
                                    {p.productCode && <p className="product-code">{p.productCode}</p>}
                                    {/* SPECS PREVIEW (Top 3) */}
                                    <div className="product-specs-preview">
                                        {p.specs && Object.keys(p.specs).length > 0 ? (
                                            Object.entries(p.specs).slice(0, 3).map(([key, val], i) => (
                                                <div key={i} className="spec-row">
                                                    <span className="spec-key">{key}</span>
                                                    <span className="spec-val">{val}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="product-desc-short">{p.description}</p>
                                        )}
                                    </div>

                                    {/* TAGS (Best for...) */}
                                    <div className="product-tags">
                                        {p.tags?.slice(0, 2).map((t, i) => (
                                            <span key={i} className="tag-badge">{t}</span>
                                        ))}
                                    </div>

                                    <span className="view-more-link">
                                        View Product &rarr;
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>

            </div>
        </div>
    );
}
