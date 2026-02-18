import React, { useState } from "react";
import "./blogsPage1.css";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Blogs() {
  const blogsPerPage = 2;
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * blogsPerPage;
  const currentBlogs = blogData.slice(startIndex, startIndex + blogsPerPage);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  return (
    <div className="blogs-section">
      <h2 className="blogs-title">Read More</h2>

      <div className="readmore-row">
        {currentBlogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} className="readmore-card" key={blog.id}>
            <img src={blog.image} className="rm-img" />

            <div className="rm-content">
              <h3 className="rm-title">{blog.title}</h3>
              <p className="rm-meta">{blog.category} | {blog.date}</p>

              <div className="rm-read">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="rm-arrow" />
                <span>Read More</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button onClick={() => setPage(Math.max(1, page - 1))}>&lt;</button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={page === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={() => setPage(Math.min(totalPages, page + 1))}>&gt;</button>
      </div>
    </div>
  );
}
