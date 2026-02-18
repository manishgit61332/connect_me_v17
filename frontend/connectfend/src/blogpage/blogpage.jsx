import React from "react";
import "./blogpage.css";
import { useParams } from "react-router-dom";
import blogDataFull from "../data/blogdata1";
import BlogsPage from "../blogspage/blogsPage1";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/SEO";

export default function BlogPage() {
  const { id } = useParams();
  const blog = blogDataFull[id];

  if (!blog) return <h1 style={{ padding: "40px" }}>Blog Not Found</h1>;

  return (
    <div className="blog-section">
      <SEO
        title={`${blog.title} - ConnectME Blog`}
        description={`Read about ${blog.title}. Category: ${blog.category}. Published on: ${blog.date}.`}
        type="article"
      />

      <div className="blog-banner">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-content">

        <h1 className="blog-title">{blog.title}</h1>

        <p className="blog-meta">
          {blog.category} | {blog.date}
        </p>

        <div
          className="blog-text"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="quote-box">
          <div className="quote-icon">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
          <div>
            <p className="quote-text">{blog.quote.text}</p>
            <p className="quote-author">{blog.quote.author}</p>
          </div>
        </div>

      </div>
      <BlogsPage />
    </div>
  );
}
