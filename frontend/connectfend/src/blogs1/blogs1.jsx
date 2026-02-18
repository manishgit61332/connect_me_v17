import React, { useState } from "react";
import "./blogs1.css";
import { Link } from "react-router-dom";

import blogData from "../data/blogData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/SEO";

export default function Blogs() {
  const blogsPerLoad = 8;
  const [count, setCount] = useState(blogsPerLoad);

  const featured = blogData[0];
  const smallCards = blogData.slice(1, count + 1);

  return (
    <div className="blogs-section">
      <SEO
        title="ConnectME Blog - Industry Insights & News"
        description="Stay updated with the latest trends in Industrial IoT, Smart Metering, and Utility Billing from ConnectME experts."
      />



      <div className="blogs-grid">

        {/* ⭐ FEATURED CARD CLICKABLE FULL CARD */}
        <Link to={`/blog/${featured.id}`} className="featured-card-link">
          <div className="featured-card">
            <img src={featured.image} className="featured-img" alt="" />

            <div className="featured-content">
              <h2>{featured.title}</h2>
              <p>{featured.category} | {featured.date}</p>
            </div>
          </div>
        </Link>

        {/* RIGHT COLUMN FIRST 2 CARDS */}
        <div className="right-column">
          {smallCards.slice(0, 2).map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} className="blog-img" alt="" />

              <div className="blog-content1">
                <h3 className="blog-title1">{blog.title}</h3>
                <p className="blog-meta1">{blog.category} | {blog.date}</p>

                <Link to={`/blog/${blog.id}`} className="blog-readmore">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow-icon" />
                  <span className="rm-text">Read More</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* REMAINING CARDS */}
        {smallCards.slice(2).map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} className="blog-img" alt="" />

            <div className="blog-content2">
              <h3 className="blog-title2">{blog.title}</h3>
              <p className="blog-meta2">{blog.category} | {blog.date}</p>

              <Link to={`/blog/${blog.id}`} className="blog-readmore">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow-icon" />
                <span className="rm-text">Read More</span>
              </Link>
            </div>
          </div>
        ))}

      </div>

      {/* LOAD MORE BUTTON */}
      <div className="loadmore-wrap">
        <button
          className="loadmore-btn"
          onClick={() => setCount(count + blogsPerLoad)}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
